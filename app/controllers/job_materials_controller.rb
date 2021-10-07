class JobMaterialsController < ApplicationController
  before_action :set_job_material, only: [:show, :update, :destroy]

  # GET /job_materials
  def index
    @job_materials = JobMaterial.all

    render json: @job_materials
  end

  # GET /job_materials/1
  def show
    render json: @job_material
  end

  # POST /job_materials
  def create
    @job_material = JobMaterial.new(job_material_params)

    if @job_material.save
      render json: @job_material, status: :created, location: @job_material
    else
      render json: @job_material.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /job_materials/1
  def update
    if @job_material.update(job_material_params)
      render json: @job_material
    else
      render json: @job_material.errors, status: :unprocessable_entity
    end
  end

  # DELETE /job_materials/1
  def destroy
    @job_material.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_job_material
      @job_material = JobMaterial.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def job_material_params
      params.require(:job_material).permit(:job_id, :material_id, :quantity, :total)
    end
end
