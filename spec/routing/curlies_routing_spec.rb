require "spec_helper"

describe CurliesController do
  describe "routing" do

    it "routes to #index" do
      get("/curlies").should route_to("curlies#index")
    end

    it "routes to #new" do
      get("/curlies/new").should route_to("curlies#new")
    end

    it "routes to #show" do
      get("/curlies/1").should route_to("curlies#show", :id => "1")
    end

    it "routes to #edit" do
      get("/curlies/1/edit").should route_to("curlies#edit", :id => "1")
    end

    it "routes to #create" do
      post("/curlies").should route_to("curlies#create")
    end

    it "routes to #update" do
      put("/curlies/1").should route_to("curlies#update", :id => "1")
    end

    it "routes to #destroy" do
      delete("/curlies/1").should route_to("curlies#destroy", :id => "1")
    end

  end
end
