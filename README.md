# Final Project - Our wedding site

## Project Description

This is our final project for the Technigo Web development bootcamp, spring 2024.

### What your application does

This project is a wedding RSVP website, that not only gives the couple the opportunity to provide all the information about the wedding for their guests, but allow for the guest to manage their RSVP and post messages to the couple. The guests have their own profile where they can see their RSVP.

_The couple manage the guest list directly in the database._

### How it works

Our wedding couple, Sarah and Michael, have worked hard and prepared their guest list in the database by including
_names,
emails,
how they know them (relations) and
if they are allowed to make a speech and/or bring a plus one_.

The guests, who recieved an invitation in the mail, use a QR code to find the site **Landing page** and logs in by using their email and the _invitation code_ written on the card. They are then redirected to the home page. In the background, when the guest log in, we check if their email exists in our database and if the code is correct. We then assign them a access token and save that, the guest ID and the logged in state to the local storage

On the **Home page** the guests can read all the information about the wedding, including a list of all the guest attending. The links in header scrolls down to the section they are interested in, or takes them to a new page such as the RSVP.

On the **RSVP page**, the guest can fill out the form to tell the couple if they are attending and what they would like to eat. If they are allowed to make a speech and/or bring a plus one, this is also included in the form. (We check this in the database, by looking up their guest ID and authenticating the access token in the request.) After they submit the form, the guest us redirected to a **Confirmation page** and the data is saved in the data base if the auth is OK.

From here, the guest can double check their RSVP in their **My Attendance** page, go to the **Message board page** to post a happy thought, or go back to read more information about the wedding.

### Some tech

We are using **React.js** with **Vite**, **Tailwind** and our own **Express.js** backend (see more in the backend README).

- **Zustand** - manages global states.
- **React Router** - handles page routing for an effective SPA.
- **React Router Hash Links** - are used for the scroll links.
- **React Lazily** - is used to lazy load named imports.
- **Moment** - is used for the time stamp on the message board.
- **React Scroll Parallax** - creates the effect on the image section.
- **React Scroll to top** - helped us with the scroll to top button.
- **React Slick** and **Slick Carousel** - is used for the carousel.
- **Headless UI** - gave us some ready made components and **Hero icons** - gave us the icons.

## How to Use the Project

To login on frontend and see the site on Netlify, use user *test@example.com* with invitation code **secretwedding**.

## MoSCoW

We prioritized our work as follows:

### Must have

- The site needs to show when and where the wedding takes place.
- It needs to allow for guests to log in, and hide information until they do.
- It needs to have functionality for guests to RSVP and to save the answer to the database.

### Should have

- It would be nice to have personalized (dynamic) data, where the RSVP form reflects if the guest is allowed to bring a plus one, or give a speech.
- More information, such as a carousel for available accomondations near by.
- A live guest list that reflects all guests who RSVP'd "yes".
- My attendance, a separate page where the guest see their data from the database.
- Message board, where the guest can post and read messages to the couple (and each other).

### Could have

- In next phase we would add dynamic public profiles for each guest, to read more about the other people attending. Would also include the possibility to upload profile pic and about text etc.
- Also, we are at this point using an external API for the message board. That would be included in the backend.
- We would add auth to every reload or navigation, to keep the access token fresh.
- We would add a timeout to the guest local storage, perhaps to session instead.

### Wont have

- This is a custom built website for this specific couple - not a "build your own wedding site" template. It will not have back office functionality, such as to upload/change content. This is managed in the code.
- Likewise, the guest list is managed in the database and the website will not include functionality to upload or handle the list client side.

## Collaborators & Credits

Big thanks to [Citronsskal](https://github.com/Citronskal) and [Trista1987](https://github.com/trista1987) for helping us with the idea and pitch.

Also a big THANK YOU to our helpful coaches, as well as our friends, family and coworkers who have provided invaluable insights, feedback and support.

## How to Install and Run the Project

1.  Install the required dependencies using `npm install` in both frontend and backend folders.
2.  Add `INVITATION_CODE=secretwedding` to your env.
3.  Start the development server using `npm run dev` in both folders.

## See it live

Visit our wedding site at [https://project-wedding-site.netlify.app](https://project-wedding-site.netlify.app/)
