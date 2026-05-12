# 02_fe_react

**책임:** React 18 + Vite 5 + TS 5 프론트엔드. 사용자에게 실제로 보이는 결과지 UI는 전부 여기에서 나온다.

## 진입점

- [index.html](index.html) → [src/main.tsx](src/main.tsx) → [src/App.tsx](src/App.tsx)
- 결과지: [src/](src/)

## 비자명 제약

- `vite.config.ts`의 `allowedHosts: ['.atchu.co.kr', 'localhost', '127.0.0.1']`는 nginx-feature 너머 도메인 접근 허용용. 도메인 추가하려면 여기에 추가해야 한다.
- `server.hmr.clientPort: 4080`은 **컨테이너 안 vite(5173) → 호스트 nginx-feature(4080) 너머 브라우저** 경로의 HMR을 위해 박은 것. 직접 5173으로 붙으면 의미 없음.
- `watch.usePolling: true`는 도커 볼륨 마운트 환경에서 inotify가 안 먹는 문제를 우회.
- **Dockerfile은 두 개로 의도적으로 분리되어 있다**:
  - [Dockerfile.feature](Dockerfile.feature) — 컨테이너 안에서 `npm run dev`. 호스트 코드 마운트 → HMR.
  - [Dockerfile.dev](Dockerfile.dev) — `npm run build` 결과 `dist`를 `serve`로 정적 서빙. *빌드 스냅샷*.
  - 이름이 헷갈리니 주의: **dev = 빌드 스냅샷**, **feature = 실시간 HMR**.

## 연관 가이드

- 두 실행 모드의 컨테이너 구성은 [../docker-compose.yml](../docker-compose.yml) 상단 주석 참조.
