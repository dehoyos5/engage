class TopbarsController < ApplicationController
  # GET /topbars
  # GET /topbars.json
  def index
    @topbars = Topbar.all

    respond_to do |format|
      format.html # index.html.erb
      format.json { render json: @topbars }
    end
  end

  def topbar
    respond_to do |format|
      format.html # index.html.erb
      format.json { render json: @topbars }
    end
  end

  # GET /topbars/1
  # GET /topbars/1.json
  def show
    @topbar = Topbar.find(params[:id])

    respond_to do |format|
      format.html # show.html.erb
      format.json { render json: @topbar }
    end
  end

  # GET /topbars/new
  # GET /topbars/new.json
  def new
    @topbar = Topbar.new

    respond_to do |format|
      format.html # new.html.erb
      format.json { render json: @topbar }
    end
  end

  # GET /topbars/1/edit
  def edit
    @topbar = Topbar.find(params[:id])
  end

  # POST /topbars
  # POST /topbars.json
  def create
    @topbar = Topbar.new(params[:topbar])

    respond_to do |format|
      if @topbar.save
        format.html { redirect_to @topbar, notice: 'Topbar was successfully created.' }
        format.json { render json: @topbar, status: :created, location: @topbar }
      else
        format.html { render action: "new" }
        format.json { render json: @topbar.errors, status: :unprocessable_entity }
      end
    end
  end

  # PUT /topbars/1
  # PUT /topbars/1.json
  def update
    @topbar = Topbar.find(params[:id])

    respond_to do |format|
      if @topbar.update_attributes(params[:topbar])
        format.html { redirect_to @topbar, notice: 'Topbar was successfully updated.' }
        format.json { head :no_content }
      else
        format.html { render action: "edit" }
        format.json { render json: @topbar.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /topbars/1
  # DELETE /topbars/1.json
  def destroy
    @topbar = Topbar.find(params[:id])
    @topbar.destroy

    respond_to do |format|
      format.html { redirect_to topbars_url }
      format.json { head :no_content }
    end
  end
end
