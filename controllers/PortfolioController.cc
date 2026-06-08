#include "PortfolioController.h"
#include <drogon/HttpClient.h>
#include <drogon/HttpViewData.h>
#include <mutex>
#include <unordered_map>
#include <chrono>
#include <json/json.h>

#define MAX_REQUESTS 5
#define TIME_INTERVAL_MIN 10

// In-Memory Rate Limiter Setup
// Maps an IP address to a pair containing {hit_count, first_hit_timestamp}
static std::unordered_map<std::string, std::pair<int, std::chrono::steady_clock::time_point>> rate_limit_map;
static std::mutex rate_limit_mutex;


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

void PortfolioController::serveContactPage(const HttpRequestPtr& req, std::function<void (const HttpResponsePtr &)> &&callback) 
{
    servePage(req, std::move(callback), std::string("./pages/contact.html"));
}

void PortfolioController::serveResumePage(const HttpRequestPtr& req, std::function<void (const HttpResponsePtr &)> &&callback) 
{
    servePage(req, std::move(callback), std::string("./pages/resume.html"));
}

void PortfolioController::getHeadshotImages(const HttpRequestPtr& req, std::function<void (const HttpResponsePtr &)> &&callback) {
    Json::Value ret;

    ret["images"] = Json::Value(Json::arrayValue);
    ret["images"].append("/assets/images/IMG_5642.jpg");
    ret["images"].append("/assets/images/IMG_7917.jpg");
    ret["images"].append("/assets/images/IMG_0290.jpg");
    ret["images"].append("/assets/images/IMG_0188.jpg");

    auto resp = HttpResponse::newHttpJsonResponse(ret);
    callback(resp);
}

void PortfolioController::submitContactReq(const HttpRequestPtr &req, std::function<void(const HttpResponsePtr &)> &&callback) {
    // TODO
}

void PortfolioController::sendEmailNotification(const std::string& name, const std::string& email, const std::string& msg) {
    // TODO
}