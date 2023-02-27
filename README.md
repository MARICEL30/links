# A Free Alternative to LinkTree

A linktree alternative where you can add your website link, blog links and any other link inside the Header Component. On the same component you can change the portrait pic.

The background is also changeable. There is the option to change the background picture for another one or take the background pic out and add any background color of your choice on the App.css file.

The social media links are on the Footer component.
&nbsp;


![Links-iPad-Air](https://user-images.githubusercontent.com/42100507/221054575-0c66f037-7374-4c8b-a018-d11783fdaf1b.jpg)

# Getting Started with Links

Clone or fork this repository on your local machine. Once you have the file on your local machine you can change the title tag on the index.html file that's located on the public folder.

You can also change the icons which are located on the same folder. Make sure to keep the name of the icons as these need to match the manifest.json file.

# Adding Links to the Project

On the Header component change the name value and links value on myLinks array to whatever you would like to use. These are the main links on the site. You can also change the h2 tag to your name and change the portrait pic on the images folder.

![Header-links](https://user-images.githubusercontent.com/42100507/221696587-b3787a2a-cdbb-493d-92eb-dd0dadafbd5d.jpg)

# Adding Social Media LInks

The social media links are in the Footer component. You can update the const socialMediaLinks with whatever icon value and href value you would like to use. Name a variable for any social media icon in camel case ( e.g., const twitterIcon ) and assign the FontAwesomeIcon component value to it. Then add the relevant props for your icon.
