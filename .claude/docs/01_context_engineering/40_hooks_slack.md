# 40. 훅 — Slack 알림 만들기

> **내가 할 일:** Claude 가 권한을 묻거나(`Notification`) 작업을 끝냈을 때(`Stop`) Slack 으로 메시지 받기. 짐코딩이 두 훅을 모두 Slack 으로 보낸다.

---

## 1. 왜 훅이 있나

- 클로드한테 큰 작업 시켜놓고 다른 일 하다가, 멈춰있는 줄 모르고 30분 지남 → 비효율.
- Slack 으로 알림 받으면 *백그라운드 실행 + 알림 받고 복귀* 워크플로우 가능.

---

## 2. 짐코딩 `notification-hook.sh` 전문

경로: `.claude/hooks/notification-hook.sh`

```bash
#!/bin/bash
# Claude Code Notification 훅 - 권한 요청 및 사용자 입력 대기 알림

# .env 파일에서 Slack 웹훅 URL 로드
if [ -f "$CLAUDE_PROJECT_DIR/.env" ]; then
    source "$CLAUDE_PROJECT_DIR/.env"
else
    echo "오류: .env 파일을 찾을 수 없습니다: $CLAUDE_PROJECT_DIR/.env" >&2
    exit 1
fi

if [ -z "$SLACK_WEBHOOK_URL" ]; then
    echo "오류: SLACK_WEBHOOK_URL이 설정되지 않았습니다." >&2
    exit 1
fi

MESSAGE=$(jq -r '.message')
PROJECT_NAME=$(basename "$CLAUDE_PROJECT_DIR")
TIMESTAMP=$(date '+%Y-%m-%d %H:%M:%S')

PAYLOAD=$(printf '{"channel": "#claude-code", "username": "Claude Code", "text": "🔔 권한 요청 알림\n\n프로젝트: %s\n상태: %s\n시간: %s\n\nClaude Code에서 알림이 도착했습니다.", "icon_emoji": ":bell:"}' "$PROJECT_NAME" "$MESSAGE" "$TIMESTAMP")

curl -X POST --data-urlencode "payload=$PAYLOAD" "$SLACK_WEBHOOK_URL" > /dev/null 2>&1
```

---

## 3. `stop-hook.sh` (거의 동일, 메시지·아이콘만 다름)

```bash
PAYLOAD=$(printf '{"channel": "#claude-code", "username": "Claude Code", "text": "✅ 작업 완료 알림\n\n프로젝트: %s\n상태: %s\n시간: %s\n\nClaude Code 작업이 완료되었습니다.", "icon_emoji": ":white_check_mark:"}' "$PROJECT_NAME" "$REASON" "$TIMESTAMP")
```

---

## 4. 두 훅의 공통 패턴

1. `$CLAUDE_PROJECT_DIR/.env` 에서 `SLACK_WEBHOOK_URL` 로드 (`.env` 는 gitignore)
2. `jq` 로 stdin JSON 파싱 (`.message`, `.reason` 등)
3. `printf` 로 Slack payload 생성
4. `curl -X POST` 로 웹훅 전송

→ 패턴이 동일하므로 **새로운 이벤트 훅도 같은 템플릿** 으로 만들 수 있다 (`PreToolUse`, `PostToolUse`, `SubagentStop` 등).

---

## 5. settings 에 훅 등록 (짐코딩 `settings.local.json`)

```json
{
  "hooks": {
    "Notification": [
      {
        "matcher": "*",
        "hooks": [
          {
            "type": "command",
            "command": "$CLAUDE_PROJECT_DIR/.claude/hooks/notification-hook.sh"
          }
        ]
      }
    ],
    "Stop": [
      {
        "matcher": "*",
        "hooks": [
          {
            "type": "command",
            "command": "$CLAUDE_PROJECT_DIR/.claude/hooks/stop-hook.sh"
          }
        ]
      }
    ]
  }
}
```

- `matcher: "*"` → 모든 이벤트
- `$CLAUDE_PROJECT_DIR` 환경변수 사용 (절대 경로 하드코딩 금지)

---

## 6. 채호 MBTI 적용 — 도입 시점

훅은 **진짜 필요해질 때** 만 도입. 사이드 프로젝트 초반에는 과할 수 있음.

**도입 신호**:
- 한 작업이 5분 이상 걸리기 시작
- 클로드 권한 묻는 거 놓치는 일이 반복

→ 그 전엔 건드릴 필요 없음. 우선순위 낮음.

---

## 7. Discord/Telegram 으로 바꾸려면

같은 패턴, webhook URL 만 교체. `printf` payload 형식은 각 플랫폼 webhook 스펙에 맞춰야 함.

- Discord webhook: `{"content": "..."}`
- Telegram Bot: `https://api.telegram.org/bot<TOKEN>/sendMessage?chat_id=...&text=...`

---

## 8. 한 줄 정리

> **`.env` 로드 → jq 파싱 → printf payload → curl webhook**, 4줄짜리 패턴.

---

## 9. 출처

- [.claude/hooks/notification-hook.sh (raw)](https://raw.githubusercontent.com/gymcoding/claude-nextjs-starters/main/.claude/hooks/notification-hook.sh)
- [.claude/hooks/stop-hook.sh (raw)](https://raw.githubusercontent.com/gymcoding/claude-nextjs-starters/main/.claude/hooks/stop-hook.sh)
- [.claude/settings.local.json (raw)](https://raw.githubusercontent.com/gymcoding/claude-nextjs-starters/main/.claude/settings.local.json)
