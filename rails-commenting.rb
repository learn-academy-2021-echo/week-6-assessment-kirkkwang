# ASSESSMENT 6: Rails Commenting Challenge

# Add comments to the Rails Blog Post Challenge
# Explain the purpose and functionality of the code directly below the 10 comment tags

# FILE: app/controller/blog_posts_controller.rb

# ---1) creates a class of BlogPostsController which inherits from ApplicationController
class BlogPostsController < ApplicationController
  def index
    # ---2) saves BlogPost.all, which makes a GET request of all blog posts from the database, to the @posts instance variable
    @posts = BlogPost.all
  end

  def show
    # ---3) makes GET request of a specific blog post, according to the id that gets passed into it, and saves that into an instance variable
    @post = BlogPost.find(params[:id])
  end

  # ---4) creates the controller method 'new' which will render the new form
  def new
    @post = BlogPost.new
  end

  def create
    # ---5) makes POST request with strong params to make sure nothing malicious gets into the database and creates a blog post only with :title and :content
    @post = BlogPost.create(blog_post_params)
    if @post.valid?
      redirect_to blog_post_path(@post)
    else
      redirect_to new_blog_post_path
    end
  end

  # ---6) creates the controller method 'edit' which will render the edit form
  def edit
    @post = BlogPost.find(params[:id])
  end

  def update
    @post = BlogPost.find(params[:id])

    # ---7) makes PATCH request to update the blog post with the new changes with strong params to make sure only the :title and :content is allowed in
    @post.update(blog_post_params)
    if @post.valid?
      redirect_to blog_post_path(@post)
    else
      redirect_to edit_blog_post_path
    end
  end

  def destroy
    @post = BlogPost.find(params[:id])
    if @post.destroy
      redirect_to blog_posts_path
    else
      # ---8) if the destroy for some reason fails, this will redirect the user back to the page of the blog post the user was trying to delete
      redirect_to blog_post_path(@post)
    end
  end

  # ---9) a kernel level method that restricts access to anything below it to only inside the class
  private

  def blog_post_params
    # ---10) makes sure that only the :title and :content of :blog_post are the only authorized data that can be passed into the database
    params.require(:blog_post).permit(:title, :content)
  end
end
