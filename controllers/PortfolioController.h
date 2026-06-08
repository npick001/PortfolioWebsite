#pragma once

#include <drogon/HttpController.h>

using namespace drogon;

class PortfolioController : public drogon::HttpController<PortfolioController>
{
  public:
    METHOD_LIST_BEGIN
    // use METHOD_ADD to add your custom processing function here;
    // METHOD_ADD(PortfolioController::get, "/{2}/{1}", Get); // path is /PortfolioController/{arg2}/{arg1}
    // METHOD_ADD(PortfolioController::your_method_name, "/{1}/{2}/list", Get); // path is /PortfolioController/{arg1}/{arg2}/list
    // ADD_METHOD_TO(PortfolioController::your_method_name, "/absolute/path/{1}/{2}/list", Get); // path is /absolute/path/{arg1}/{arg2}/list

    // Get APIs
      ADD_METHOD_TO(PortfolioController::serveHomePage, "/", Get);
      ADD_METHOD_TO(PortfolioController::serveAboutPage, "/about", Get);
      ADD_METHOD_TO(PortfolioController::serveSkillsPage, "/skills", Get);
      ADD_METHOD_TO(PortfolioController::serveProjectsPage, "/projects", Get);
      ADD_METHOD_TO(PortfolioController::serveContactPage, "/contact", Get);
      ADD_METHOD_TO(PortfolioController::serveResumePage, "/resume", Get);
      ADD_METHOD_TO(PortfolioController::getHeadshotImages, "/api/headshots", Get);
      
      // Post APIs
      ADD_METHOD_TO(PortfolioController::submitContactReq, "/contact", Post);
    METHOD_LIST_END
    // your declaration of processing function maybe like this:
    // void get(const HttpRequestPtr& req, std::function<void (const HttpResponsePtr &)> &&callback, int p1, std::string p2);
    // void your_method_name(const HttpRequestPtr& req, std::function<void (const HttpResponsePtr &)> &&callback, double p1, int p2) const;

    // Page Serving
    void servePage(const HttpRequestPtr& req, std::function<void (const HttpResponsePtr &)> &&callback, std::string page_route);
    void serveHomePage(const HttpRequestPtr& req, std::function<void (const HttpResponsePtr &)> &&callback);
    void serveAboutPage(const HttpRequestPtr& req, std::function<void (const HttpResponsePtr &)> &&callback);
    void serveSkillsPage(const HttpRequestPtr& req, std::function<void (const HttpResponsePtr &)> &&callback);
    void serveProjectsPage(const HttpRequestPtr& req, std::function<void (const HttpResponsePtr &)> &&callback);
    void serveResumePage(const HttpRequestPtr& req, std::function<void (const HttpResponsePtr &)> &&callback);
    void serveContactPage(const HttpRequestPtr& req, std::function<void (const HttpResponsePtr &)> &&callback);

    // Page Interactions
    void submitContactReq(const HttpRequestPtr &req, std::function<void(const HttpResponsePtr &)> &&callback);

    private:
    // Dynamic Data Requests
    void getHeadshotImages(const HttpRequestPtr& req, std::function<void (const HttpResponsePtr &)> &&callback);
    void sendEmailNotification(const std::string& name, const std::string& email, const std::string& msg);
};
