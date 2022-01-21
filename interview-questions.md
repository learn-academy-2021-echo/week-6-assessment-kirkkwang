# ASSESSMENT 6: Interview Practice Questions

Answer the following questions.

First, without external resources. Challenge yourself to answer from memory.

Then, research the question to expand on your answer. Even if you feel you have answered the question completely on your own, there is always something more to learn. Write your researched answer in your OWN WORDS.

1. As a developer, I am creating a Rails application with a model called Cohort that has_many students, but OOPS! I forgot to add the foreign key. How can I fix this mistake? What is the name of the foreign key? Would the foreign key be on the Cohort model or the Student model?

Your answer: If I forgot to add a foreign key, I would go use `$ rails g migration Student add_foreign_key` and then go to the `AddForeignKey` class and use `add_column :student_id, :integer` and then do a `$ rails db:migrate` to update the `schema.rb` file. The name of the foreign key should be the `<model>_id` so in this case `student_id`. I think since the Cohort has_many students, then in this situation the foreign key should be on the Student model.

Researched answer: The foreign key always goes on the `belongs_to` side and since Student `belongs_to` Cohort, I would put the foreign key there with the convention of `<modelname_id>`, so in this example, `student_id`. The `has_many` model is singular while the `belongs_to` model is plural. I was under the assumption that in the example that the association was already set up, but if it was not set up then in the Student class, we would have to add `belongs_to :cohort` and in the Cohort class we would put `has_many :students`.

2. Which RESTful routes must always be passed params? Why?

Your answer: The RESTful routes that always need to be passed params are `show`, `update`, `destroy`. The reason is because those methods would need to know what hashes the user wants to execute upon while `index` is everything and `create` is making something completely new.

Researched answer: In rails, the anatomy of a route is something like:

```Ruby
delete '/blogs/:id' => 'blogs#destroy'
```

where `delete` is the http verb, `/blogs/:id` is the url request, `/:id` is the params, `photos#` is the name of hte controller, and `destroy` is the name of the controller method.

3. Name three rails generator commands. What is created by each?

Your answer: Three rails generator commands include `rails generate model`, `rails generate controller`, and `rails generate migration`; `model` creates the class file of the model specified, `controller` creates the ruby file for where the controller methods live, and `migration` generates a datetime file to perform alterations of the original table through methods like `add_column`.

Researched answer:
`rails generate model Foo` would make
`db/migrate/20220121202209_create_foos.rb`
`app/models/foo.rb`

`rails generate controller Foo` would make
`app/controllers/foo_controller.rb`
`app/views/foo`
`app/helpers/foo_helper.rb`
`app/assets/stylesheets/foo.scss`

`rails generate migration add_something_to_foo_table` would make
`db/migrate/20220121202716_add_something_to_foo_table.rb`

4. Consider the Rails routes below. What is the name of the controller method that would be called by each route? What action would each of the controller methods perform?

action: "GET" route: /students
`index`

action: "POST" route: /students
`create`

action: "GET" route: /students/new
`new`

action: "GET" route: /students/2
`show`

action: "GET" route: /students/2/edit
`edit`

action: "PATCH" route: /students/2
`update`

action: "DELETE" route: /students/2
`destroy`

5. As a developer, you are making an application to manage your to do list. Create 10 user stories that will help you get your application started. Read more about [user stories](https://www.atlassian.com/agile/project-management/user-stories).

As a user, I want to see 3 default lists (To Do, Doing, Done) so that I can populate them with tasks.
As a user, I want to create more lists than the default 3 so it can accomodate for different workflows.
As a user, I want to be able to rename the lists so I can customize the workflows.
As a user, I want to create a task card so I can put it into a list.
As a user, I want to give the task card a title so I can visually see a difference.
As a user, I want to give the task card a description so I can differentiate tasks with the same name.
As a user, I want to move the task card to different lists to show the status of that task.
As a user, I want to create multiple task cards in a list and reorder them.
As a user, I want to be able to move task cards around by dragging and dropping.
As a user, I want to be able to delete lists so I can minimize the workflow.
