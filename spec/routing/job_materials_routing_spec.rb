require "rails_helper"

RSpec.describe JobMaterialsController, type: :routing do
  describe "routing" do
    it "routes to #index" do
      expect(get: "/job_materials").to route_to("job_materials#index")
    end

    it "routes to #show" do
      expect(get: "/job_materials/1").to route_to("job_materials#show", id: "1")
    end


    it "routes to #create" do
      expect(post: "/job_materials").to route_to("job_materials#create")
    end

    it "routes to #update via PUT" do
      expect(put: "/job_materials/1").to route_to("job_materials#update", id: "1")
    end

    it "routes to #update via PATCH" do
      expect(patch: "/job_materials/1").to route_to("job_materials#update", id: "1")
    end

    it "routes to #destroy" do
      expect(delete: "/job_materials/1").to route_to("job_materials#destroy", id: "1")
    end
  end
end
