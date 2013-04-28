require "spec_helper"

describe TopbarsController do
  describe "routing" do

    it "routes to #index" do
      get("/topbars").should route_to("topbars#index")
    end

    it "routes to #new" do
      get("/topbars/new").should route_to("topbars#new")
    end

    it "routes to #show" do
      get("/topbars/1").should route_to("topbars#show", :id => "1")
    end

    it "routes to #edit" do
      get("/topbars/1/edit").should route_to("topbars#edit", :id => "1")
    end

    it "routes to #create" do
      post("/topbars").should route_to("topbars#create")
    end

    it "routes to #update" do
      put("/topbars/1").should route_to("topbars#update", :id => "1")
    end

    it "routes to #destroy" do
      delete("/topbars/1").should route_to("topbars#destroy", :id => "1")
    end

  end
end
