# ==========================================
# STAGE 1: Builder
# ==========================================
FROM drogonframework/drogon:latest AS builder
WORKDIR /src
COPY . .
#RUN mkdir build && cd build && cmake .. && make
RUN cd build && cmake .. && make

# ==========================================
# STAGE 2: Runner
# ==========================================
FROM drogonframework/drogon:latest
WORKDIR /app
COPY --from=builder /src/build /app/build
WORKDIR /app/build
EXPOSE 2526
CMD ["./PortfolioWebsite"]