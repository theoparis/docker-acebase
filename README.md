# Acebase Docker Image

This is a [acebase server](https://www.npmjs.com/package/acebase-server) docker image that runs off of `node:alpine`.

## Environment Variables

This image has several environment variables for specifying acebase options. Below are the default options:

```dotenv
ACE_DB=mydb
ACE_ADMIN_PASS=s3cr3t
ACE_AUTH=true
ACE_ALLOW_SIGNUP=false
ACE_PATH=/data
```

## Running With Docker Compose

```yaml
services:
    db:
        image: creepinson/acebase
        volumes:
            - ./data:/data
        ports:
            - 5757:5757
        env_file: .env
```
