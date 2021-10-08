class UsersController < ApplicationController
  before_action  only: [:show, :update, :create, :destroy]

  # GET /users
  def index
    @users = User.all

    render json: @users
  end

  # GET /users/1
  def show
    render json: @user
  end

  # GET /users/:id
  def userid 
    user = User.find(params[:id])
    render json: @user
  end
  

  # POST /signup
  def create

    newUser = User.new(user_params)
    byebug
    if newUser.save

      render json:newUser

    else
      render json: {errors: newUser.errors.full_messages}
    end
  end

  # PATCH/PUT /users/:id
  def update
    if @user.update(user_params)
      render json: @user
    else
      render json: @user.errors, status: :unprocessable_entity
    end
  end

  # DELETE /users/:id
  def destroy 
    user = User.find(params[:id])
    user.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_user
      @user = User.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def user_params
      params.permit(:name, :username, :email, :password)
    end 

    def auth_params
      params.permit(:username, :password)
    end

end
