class SessionsController < ApplicationController

    # Login >>>>
    # POST /login
    def create
        

        user_to_login = User.find_by_username(params[:username])

        if user_to_login

            session[:user_id] = user_to_login.id
            render json: user_to_login

        else
        render json: { error: "Could Not Authenticate" }
        end
    
    end

    # <<<< Logout 
    # DELETE /login
    def destroy
        
        session.delete(:user_id)
        render json:{session_user: session[:user_id]}
    end


end