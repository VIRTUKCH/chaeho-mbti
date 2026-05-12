# 01_proxy_nginx

**책임:** nginx 리버스 프록시 설정. 두 개의 실행 모드를 각각 다른 React 백엔드로 라우팅한다.

## 진입점

- [feature.conf](feature.conf) — `react-feature:5173`으로 프록시. HMR WebSocket upgrade 통과.
- [dev.conf](dev.conf) — `react-dev:3000`으로 프록시. `serve`가 서빙하는 정적 빌드.

## 비자명 제약

- 두 conf 파일 모두 **`listen 80`**. 충돌은 docker compose가 profile로 컨테이너 자체를 분리해서 회피한다 — 같은 nginx 인스턴스 안에 둘 다 박지 말 것.
- `feature.conf`의 `proxy_read_timeout 86400`은 HMR WebSocket 끊김 방지용이다. 일반 HTTP 서비스 기준으로 짧게 줄이면 HMR이 죽는다.
- gzip은 두 모드 모두 꺼져 있다. **prod 환경에서는 반드시 켤 것.**
- 외부 도메인(`*.atchu.co.kr`)으로 들어오는 요청도 여기를 거친다. Vite의 `allowedHosts` 와 짝을 맞춰야 함.
