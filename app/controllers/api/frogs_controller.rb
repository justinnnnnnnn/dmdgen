class Api::FrogsController < ApplicationController
  before_action :set_frog, only: [:show, :update, :destroy]

  # GET /frogs
  def index
    @frogs = Frog.all
    render json: @frogs
  end
  
  # GET /frogs/1
  def show
    render json: @frog
  end
  
  # POST /frogs
  def create
    @frog = Frog.new(frog_params)
    
    if @frog.save
      render json: @frog #, status: :created, location: @frog
    else
      render json: @frog.errors, status: :unprocessable_entity
    end
  end
  
  # PATCH/PUT /frogs/1
  def update
    if @frog.update(frog_params)
      render json: @frog
    else
      render json: @frog.errors, status: :unprocessable_entity
    end
  end
  
  # DELETE /frogs/1
  def destroy
    @frog.destroy
    if @frog.destroyed?
      head :no_content # Indicates success but that there's nothing to return in the response body
    else
      render json: { error: "Failed to delete the frog" }, status: :unprocessable_entity
    end
  end

  
  private
  
  # Only allow a list of trusted parameters through.
  def frog_params
    # params.require(:frog).permit(:data)
    params.require(:frog).permit(data: {})
  end

  
  # Use callbacks to share common setup or constraints between actions.
  def set_frog
    @frog = Frog.find_by(id: params[:id])
    if @frog.nil?
      render json: { error: 'Frog not found' }, status: :not_found
    end
  end
end