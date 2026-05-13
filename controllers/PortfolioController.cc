#include "PortfolioController.h"

void PortfolioController::servePage(const HttpRequestPtr& req, std::function<void (const HttpResponsePtr &)> &&callback, std::string page_route) 
{
    auto resp = HttpResponse::newFileResponse(page_route);
    callback(resp);
}

void PortfolioController::serveHomePage(const HttpRequestPtr& req, std::function<void (const HttpResponsePtr &)> &&callback) 
{
    servePage(req, std::move(callback), std::string("./pages/home.html"));
}

void PortfolioController::serveAboutPage(const HttpRequestPtr& req, std::function<void (const HttpResponsePtr &)> &&callback) 
{
    servePage(req, std::move(callback), std::string("./pages/about.html"));
}

void PortfolioController::serveSkillsPage(const HttpRequestPtr& req, std::function<void (const HttpResponsePtr &)> &&callback) 
{
    servePage(req, std::move(callback), std::string("./pages/skills.html"));
}

void PortfolioController::serveProjectsPage(const HttpRequestPtr& req, std::function<void (const HttpResponsePtr &)> &&callback) 
{
    servePage(req, std::move(callback), std::string("./pages/projects.html"));
}