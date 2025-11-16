import datetime

# UTC 시간을 획득(모듈.클래스.메서드)
utc_now = datetime.datetime.utcnow()

# KST (UTC+9)로 변환
# 서울 시간은 UTC보다 9시간 빠름
# timedelta은 시간 차이 또는 기간을 나타냄
kst_time = utc_now + datetime.timedelta(hours=9)

# YYYY-MM-DD 형식 출력
print(kst_time.strftime("%Y-%m-%d"))