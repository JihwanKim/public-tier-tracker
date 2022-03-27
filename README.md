# Tier-Tracker

게임 전적검색 및 유저의 티어와 스탯 등의 기록을 활용하는 서비스를 만드려고 했습니다.

하지만, 다른것을 하기 위해 드랍하였으며, 작성된 소스코드는 공개합니다.

서버와 클라이언트 모두 다듬지는 않아서 코드가 더럽고, 버그가 발생할 수 있습니다.

어디까지나 참고용입니다.

아래 항목들에 대해서만 구현되어있습니다
- 전적검색
- 전적 새로고침
- 유저가 해당 매치에서 만든 킬/데미지/이동거리
- 매치 디테일
    - 팀 총 킬수
    - 각팀별 유저 목록
    - 팀별 랭크


**[데모 영상](https://youtu.be/A6HcUlw1qoM)**

# Server
### Tech Spec
```
serverless-framework
Typescript (node version 14)
AWS DynamoDB
```

PUBG API 호출을 위한 API KEY를 발급받아야함. 

# Client
### Tech Spec
```
Flutter (2.10.3)
```
