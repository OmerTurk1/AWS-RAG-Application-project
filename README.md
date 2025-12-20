# AWS GenAI RAG Application
This repository has GenAI RAG Application developed using AWS Products for ITUxAWS Hackathon 2025.

## Tools Used:
- AWS S3: Buckets for files 
- AWS Bedrock: Knowledge Base
  - Embedding Model: Takes files from KB and returns vectors
  - Vector Store(OpenSearch): Takes file contents and vectors, storing them permanently
- LLM Model: Uses Anthropic Claude 3 to generate answers
- AWS Lambda: Functioning API
- AWS Amplify: Frontend App for user

## Schema:
[RAG App Schema](https://github.com/OmerTurk1/AWS-RAG-Application-project/blob/main/Rag%20App%20Diyagram.drawio.png)

## Website Link:
https://main.d3q1tlawbp7vwl.amplifyapp.com/
Note: Link has expired due to the limited usage time determined for the hackathon
