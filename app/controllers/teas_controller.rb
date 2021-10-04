class TeasController < ApplicationController
  before_action :set_tea, only: [:show, :update, :destroy]
  before_action :authorize_request, only: [:create, :update, :destroy]

  # GET /teas
  def index
    @teas = Tea.all

    render json: @teas
  end

  # GET /teas/1
  def show
    render json: @tea, include: :flavor
  end

  # POST /teas
  def create
    @tea = Tea.new(tea_params)
    @tea.user = @current_user

    if @tea.save
      render json: @tea, status: :created, location: @tea
    else
      render json: @tea.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /teas/1
  def update
    if @tea.update(tea_params)
      render json: @tea
    else
      render json: @tea.errors, status: :unprocessable_entity
    end
  end

  # DELETE /teas/1
  def destroy
    @tea.destroy
  end

  # adding flavor to tea method goes here
  def add_flavor_to_tea
    @tea = Tea.find(params[:id])
    @flavor = Flavor.find(params[:flavor_id])

    @tea.flavors << @flavor

    render json: @tea, include: :flavors
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_tea
      @tea = Tea.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def tea_params
      params.require(:tea).permit(:name, :price, :description, :image_url, :flavor_id)
    end
end
