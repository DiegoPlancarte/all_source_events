class VendorsController < ApplicationController
  before_action :authenticate_user!
  before_action :set_vendor, only: [:show, :edit, :update, :destroy, :favorite_vendor]

  # GET /vendors
  # GET /vendors.json
  def index
    @vendors = Vendor.all
    render json: @vendors
  end
  
  # GET /vendors/1
  # GET /vendors/1.json
  def show
    render json: @vendor
  end

  # GET /vendors/new
  def new
    @vendor = Vendor.new
  end

  # GET /vendors/1/edit
  def edit
  end

  # POST /vendors
  # POST /vendors.json
  def create
    @vendor = Vendor.create!(vendor_params)
    render json: Vendor.all
  end

  # PATCH/PUT /vendors/1
  # PATCH/PUT /vendors/1.json
  def update
    @vendor.update(vendor_params)
    if @vendor.valid?
      render json: @vendor
    end
  end

  # DELETE /vendors/1
  # DELETE /vendors/1.json
  def destroy
    @vendor.destroy
      render json:Vendor.all
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_vendor
      @vendor = Vendor.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def vendor_params
      params.require(:vendor).permit(:name, 
                                    :category,
                                    :address,
                                    :city,
                                    :state,
                                    :zip,
                                    :description,
                                    :phone,
                                    :email,
                                    :created_at,
                                    :updated_at)
    end
end
