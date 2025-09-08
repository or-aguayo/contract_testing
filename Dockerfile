FROM node:20-bullseye
WORKDIR /app
COPY consumer ./consumer
COPY provider ./provider
RUN cd consumer && npm ci
RUN cd provider && npm ci
CMD ["bash"]
