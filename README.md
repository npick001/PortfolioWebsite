# PortfolioWebsite

This repository holds the source code for my portfolio website (portfolio.nicholaspickering.dev) served by a Drogon HTTP server, with static pages in `pages/` and dynamic view support in `views/`.

## Features

- C++17 web application using Drogon
- Static content served from `pages/`
- Dynamic views support through `views/`
- Docker-based build and deployment
- Sample test target using Drogon test helpers

## Repository Layout

- `CMakeLists.txt` - main CMake project file
- `CMakePresets.json` - Visual Studio/CMake preset for x64 debug build
- `config.json` - Drogon runtime configuration
- `main.cc` - application entry point
- `controllers/` - request handlers
- `filters/` - request/response filters
- `models/` - application data models
- `pages/` - static website pages and assets
- `plugins/` - Drogon plugins
- `views/` - dynamic view templates
- `test/` - test target and test runner
- `dockerfile` - multi-stage Docker image build
- `docker_utils/` - deployment helper scripts

## Requirements

- C++ compiler with C++17 support
- CMake 3.11 or newer
- `vcpkg` and `VCPKG_ROOT` environment variable set
- Drogon installed via vcpkg or another supported method
- Docker if you want containerized builds/deployment

## Build Instructions

### Option 1: Build with CMake

1. Ensure `VCPKG_ROOT` is set to your vcpkg installation path.
2. Create and enter a build folder:

```powershell
mkdir build
cd build
cmake ..
cmake --build .
```

3. After building, the executable and runtime assets will be available in the build output directory.

### Option 2: Build with the provided CMake preset

Use the included preset if you are building on Windows with Visual Studio:

```powershell
cmake --preset x64-debug-vcpkg
cmake --build --preset x64-debug-vcpkg
```

## Run Locally

From the build output folder, run:

```powershell
./PortfolioWebsite
```

Then open the website at:

- `http://localhost:2526`

The server listens on port `2526` by default as configured in `config.json`.

## Docker Deployment scripts

- `docker_utils/transfer_container.ps1` - builds the Docker image which can be transferred between computers
- `docker_utils/update_container.ps1` - builds the Docker image and restarts the container
- `docker_utils/update_prod_container.ps1` - restarts a production container from the existing image

## Tests

The repository includes a Drogon-based test executable in `test/`.

To build and run tests:

```powershell
cd build
cmake --build . --target PortfolioWebsite_test
./test/PortfolioWebsite_test
```

## Notes

- `CMakeLists.txt` copies `config.json` and the `pages/` directory into the build output folder after building.
- The default runtime `document_root` is `./pages`, and the default home page is `home.html`.