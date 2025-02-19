# 메인페이지(index.html), 작성페이지(input.html), 상세페이지(detail.html), header.html로 이루어진 소개페이지

## 1. 메인페이지(index.html)
- 팀원들의 사진, 이름, mbti, 나의 한마디가 적힌 카드가 나열
- 이름에는 하이퍼링크를 걸어두어서 클릭 시 상세페이지(detail.html)로 이동
![image](https://github.com/user-attachments/assets/34c6de60-30c9-449c-a234-20b9345d1143)

## 2. 작성페이지(input.html)
- 이름, mbti, 나의 성격, 나의 목표, 강의에 참여한 이유 및 강의에서 얻어가고 싶은 것, github 또는 블로그 주소, 사진, 나의 한마디를 작성하여 제출 → Firebase에 저장
![image](https://github.com/user-attachments/assets/344dfd3c-844d-4834-bda4-8b744922a891)
## 3. 상세페이지(detail.html)
- 메인페이지(index.html)에서 이름을 클릭 시 넘어오는 페이지
- 작성했던 내용들을 모두 볼 수 있음
- github 또는 블로그 주소는 하이퍼링크를 걸어두어 클릭 시 해당 사이트로 이동
![image](https://github.com/user-attachments/assets/d991f3f6-3acc-48e3-9a5a-987459ca104b)

## 4. header.html
- 3가지 페이지의 상단에 달리는 header로 공통되게 달리기 때문에 별도의 html로 작성하여 load하는 방식
![image](https://github.com/user-attachments/assets/6a55d2ac-0012-4634-9b74-cf700396d527)



## 에러사항

### 1. 완성 후 리팩토링 과정에서 script 함수들을 별도의 js 파일로 추출하여 중복을 줄이는 작업 중 pending 상태로 firebase의 데이터가 생성이 되지 않는 문제가 발생!
- 해결 : js파일의 addDoc() 함수에는 await이 있었지만 이 함수를 불러오는 html 본문에 await을 달아주지 않고 다른 페이지로 넘어가는 로직때문에 데이터가 생성되기 전에 다른 페이지로 넘어가 해당 함수의 결과값을 생성하지 못하고 중단됨. → await을 달아주어 대기시간을 주어 해결!

## 리팩토링할만한 사항들

## 1. 작성페이지(input.html)에 validate을 추가
- 현재 모든 값을 넣지 않아도 데이터가 생성되어 Firebase에 저장이 됨
- validate 로직을 추가하여 모든 값을 넣었을 시 저장이 되도록 그리고 적절치 않는 내용이 담기지 않도록 제한 가능
## 2. 작성페이지(input.html)의 이미지 저장 방식 변경
- 현재 사진을 이미지 경로로 text 형식으로 저장하고 있는데 이것을 파일로 받아 s3같은 스토리지에 저장하여 해당 주소를 저장하는 방식으로 변경 가능
## 3. Firebase를 init하는 js 파일의 보안
- 현재 github 코드상 firebase_init.js를 보안의 이유로 같이 올리지 않았는데 해당 키값 부분을 변수로 주어 로컬에서 해당 키값을 넣어주어 실행하는 방식으로 변경 가능
## 4. 저장된 데이터를 삭제하거나 수정하는 페이지 또는 기능
- 현재 데이터 수정과 삭제는 Firebase 상에서만 가능하기 때문에 해당 페이지를 추가로 작성하여 수정하거나 삭제하도록 기능 추가 가능

## 사용한 기술스택
- HTML
- CSS
- Javascript

## DB
- Firebase

## SVN
- git
- github

## IDE
- visual studio code
