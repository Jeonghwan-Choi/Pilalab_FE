# 가져올 이미지를 정의
FROM node:16
# 경로 설정하기
WORKDIR /app
# package.json 워킹 디렉토리에 복사 (.은 설정한 워킹 디렉토리를 뜻함)
COPY package.json .
# 명령어 실행 (의존성 설치)
RUN npm install
# 현재 디렉토리의 모든 파일을 도커 컨테이너의 워킹 디렉토리에 복사한다.
COPY . .

# 환경변수 설정
# ENV REACT_APP_BASE_URL="http://fulldive.live"
# ENV REACT_APP_API_URL="http://fulldive.live:8880"
# ENV REACT_APP_RTMP_URL="rtmp://fulldive.live:8882/live"
# ENV REACT_APP_SOCKET_URL="ws://fulldive.live:8885/MilcomedaSocket"
# ENV REACT_APP_API_SERVER=":8880/"
# ENV REACT_APP_ARTIST_IMG_SERVER=":8881/artist_images/"
# ENV REACT_APP_VIDEO_IMG_SERVER=":8883/live/"
# ENV REACT_APP_BEFORE_VIDEO_IMG_SERVER=":8884/vod/live/"
# ENV REACT_APP_STAGE_IMG_SERVER=":8884/cosimg/stage/"
# ENV REACT_APP_USER_IMG_SERVER=":8884/cosimg/user/"
# ENV REACT_APP_ARTIST_IMG_SERVER=":8884/cosimg/user/"
# ENV REACT_APP_KSNETAPI_URL = "http://fulldive.live:8886"

# 3000번 포트 노출
EXPOSE 3000

# npm start 스크립트 실행
CMD ["npm", "start"]