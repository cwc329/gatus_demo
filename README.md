# Workshop Gatus

[Gatus](https://github.com/TwiN/gatus) 是一個使用 Go 的開源網站監控套件，
讀入 yaml 的 config 檔案，在檔案中定義要輪詢的 endpoints 以及輪詢的各項設定，
並且可以串接 email, slack 等通知。

## Requirement
1. docker installed
2. docker-compose installed
3. yarn installed

> recommended OS: Linux and macOS

## Prepare
1. build demo server docker image
```shell
docker build -t gatus_demo:latest .
```
2. init project
```shell
yarn gatus:init
```

## Run demo
- start demo
```shell
yarn run gatus:up
```
- end demo
- ```shell
  yarn run gatus:down
- ```
  
## Alerts
使用 gmail 為例
1. 申請 gmail app password
2. 更改 config.yaml 的 alerting.email
```yaml
alerting:
  email:
    from: "your@email.address"
    to: "receiver1@email.address,receiver2@email.address"
    password: "<your_gmail_app_password>"
    port: 587
    host: "smtp.gmail.com"
```

3. 在 endpoint 加上 alerts
```yaml
endpoints:
  - name: let me see see
    url: https://rang.wo.kan.kan
    conditions:
      - "[STATUS] == 200"
    alerts:
      - type: email
        enabled: true
        description: cannot see
        send-on-resolved: true
```

## Ref
[推薦自動化監控網站運行服務 - Gatus](https://blog.wu-boy.com/2022/03/automated-service-health-dashboard-gatus/)