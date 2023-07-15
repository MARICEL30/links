# A Free Alternative to LinkTree

A linktree alternative where you can add your website link, blog links and any other link inside the Header Component. On the same component you can change the portrait pic.

The background is also changeable. There is the option to change the background picture for another one or take the background pic out and add any background color of your choice on the App.css file.

The social media links are on the Footer component.
&nbsp;

![screenshot-links2](https://user-images.githubusercontent.com/42100507/231402436-6ad0d052-9970-4508-8559-d9afc72666f3.jpg)




# Getting Started with Links

Clone or fork this repository on your local machine. Once you have the files on your local machine you can change the title tag on the index.html file that's located on the public folder.

You can also change the icons which are located on the same folder. Make sure to keep the name of the icons as these need to match the manifest.json file. To clone this repository run:

```git clone https://github.com/MARICEL30/links.git```

Then you'll need to check that the scripts are on the package.json file. After checking that remove the node modules and the package-lock.json file. Now install npm:

```npm install```

You can use yarn if you prefer. Now it's time to check if everything is working fine by running

```npm start```

# Adding Links to the Project

On the Header component change the name value and link value on myLinks array to whatever you would like to use. These are the main links on the site. You can also change the h2 tag to your name and change the portrait pic on the images folder.

![my-links-array](https://github.com/MARICEL30/links/assets/42100507/add44fc3-2884-40a3-99e1-562661cbcbde)


# Adding Social Media LInks

The social media links are in the Footer component. You can update the const socialMediaLinks with whatever icon value and href value you would like to use. Name a variable for any social media icon in camel case ( e.g., const twitterIcon ) and assign the FontAwesomeIcon component value to it. Then add the relevant props for your icon.

```const twitterIcon = <FontAwesomeIcon icon={faTwitter} size="2x" color='#fff'/>```


The faTwitter is part of the fontawesome icon library. You can change it to any other brand icon.
