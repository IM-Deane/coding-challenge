# POST MORTEM

**Author: Tristan Deane**

## Project Overview

The current state of the application meets most of the basic requirements
outlined in the specification. Currently, the application provides the user with
three main functions:

1. The user can click any candidate row and view a list of their current
   applications. Each application they've applied for displays the title of the
   job, the current status of the application; and a button that triggers a
   detail view.

2. When the user clicks on the modal button, it brings up a detailed view of the
   application. Currently, this view simple shows the job title and the
   candidate's name.

3. I've included a search feature that let's the user filter the list of
   candidates by their name or email address.

## Design decisions & Tradeoffs:

Given the time constraint, I knew that I wouldn't be able to implement
everything depicted in the project screenshots.

With this in mind, I decided to focus on what I considered to be the project's
core features:

- Candidate List
- Application sub-list
- Details Modal
- Searchbar

This unfortunately meant I ignored a lot of the styling shown in the
screenshots. If given more time, i'm confident that I would've had a fully
functional application with all of the expected styling.

In particular, the absence of the colored status icons definitely detracts from
the overall appeal of the project. If this project was intended for a client, I
would likely have made it a higher priority. However, I believe that the status
label still provides the user with enough info to navigate the table.

## Future Improvements

In a future version of the project I would've loved to add the following:

- Unit tests to ensure the basic functionality of the project was correct
- Implementing various styling updates (table structure i'm looking at you!)
- Fixed the bug with the date column only displaying the incorrect time interval
