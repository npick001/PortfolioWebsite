#include "PortfolioController.h"

// Add definition of your processing function here
void PortfolioController::serveHomePage(const HttpRequestPtr& req, std::function<void (const HttpResponsePtr &)> &&callback) 
{
    printf("Inside serveHomePage function.\n");

    // Create a response that loads your index.html file
    auto resp = HttpResponse::newFileResponse("./pages/home.html");
    
    // Send it back to the client
    callback(resp);
}