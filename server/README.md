# Tier-Tracker

게임들의 티어 트래킹하고, 이후 유저들간에 여러가지 활용할 수 있는 서비스 제작하려다가 드랍함.

### 버전 정보
```
NodeJS v14
```

# install

`yarn add --dev`

# Setup

### PUBG

`src/libs/pubg/apis/common/pubg_requester.ts` 에서 api_key 세팅

# Run

### API Run

실행하려는 대상 API에 대해 mock.json을 변경해준 뒤, 명령어 실행  
`npm run invoke-pubg-seasons`

### Local RUN
`serverless-framework` 로컬 실행방법 참조


# Test

`npm run test`

# Deploy

`serverless-framework` 배포방법 참조
