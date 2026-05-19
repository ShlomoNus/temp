# Melingo Elasticsearch Docker Setup

## Prerequisites

Make sure Docker Desktop is installed and running.

## 1. Load the Docker image

Go to the folder where the `.tar` file is located.

Example:

```powershell
cd C:\EKS
```

Load the image:

```powershell
docker load --input "melingo-es-v8.17.1-v12.tar"
```

Verify that the image was loaded:

```powershell
docker images
```

You should see:

```text
melingo-es-v8.17.1:v12
```

## 2. Start Elasticsearch and Kibana

From the project folder, run:

```bash
npm run docker:start
```

## 3. Verify Elasticsearch

Open:

```text
http://localhost:9200
```

Or run:

```powershell
curl http://localhost:9200
```

You should see Elasticsearch version `8.17.1`.

## 4. Verify Melingo plugin

Run:

```powershell
curl http://localhost:9200/_cat/plugins?v
```

You should see:

```text
melingo_plugin
```

## 5. Open Kibana

Open:

```text
http://localhost:5609
```

## Notes

The Docker image is loaded manually from the `.tar` file only once.

After the image is loaded, use:

```bash
npm run docker:start
```

to start the containers.
