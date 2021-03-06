layout: post
author: dan
permalink: /:title/
---
Wikidata gives you most of the power you could ever want to visual data but removes the hard work of building a database full of useful information. 

The data in this database isn't completely clean so there can still be some work to do but it is a great starting point.

Why might you want to learn to use wikidata queries? Wikipedia is arguably the most credible and complete source of information in the universe. You can learn so much from reading an individual wikipedia article however what you can learn from database of wikipedia is a magnitude more.

You can also build visuals 

Wikidata uses it's own structured query language called SPARQL. It is very easy to use and I actually love it compared to the mssql work that I'm used to. I think that implementing a feature into mssql server similar to the wikidata query program's control+space would be amazing.

Let's research people. 

Select ?item 
Where{ 
    ?item wdt:p31 wd:q5 
    }

Let's break this down. This query the most logical starting point if you want to know about people wdt:p31 represents "Instance of" wd:q5 represents "Human"


If we are talking about making a plain English query it makes sense to me to start with instance of human with country of citizenship : Tunisia. 

You can also use wikidata as an api to return information. If you want to keep an eye on new instances of humans added to wikipedia you could do that. https://www.mediawiki.org/wiki/Wikibase/EntityData
https://www.wikidata.org/wiki/Special:EntityData/Q7251

I decided I wanted to look at famous people from my alma matter, Illinois State University. My first search was for entrepreneurs who were educated at Illinois State. I was sorely dissappointed to find that noone matched that criteria. I suddenly remembered something that I had casually exclaimed after a few drinks at a family party. Going to Illinois State University for a business degree is a waste of time. Years later my cousin who at the time was halfway through a bachelors degree in actuary science reminded me of this offhand comment and affirmed that what I had said was something that he was now coming to understand first hand. So now I want to write a letter to my cousin but also to other young adults contemplating going to school for business at Illinois State University. 

Reading up on actuarial science I think that Tyler would appreciate this even more as SQL is a valued skill for an actuarial.


https://medium.com/freely-sharing-the-sum-of-all-knowledge/writing-a-wikidata-query-discovering-women-writers-from-north-africa-d020634f0f6c

https://www.mediawiki.org/wiki/Wikidata_Query_Service/User_Manual

#List of most common occupations for graduates of ISU who have a wikipedia page.
SELECT ?occupationLabel (COUNT(?occupationLabel) AS ?count) WHERE {
  ?item wdt:P31 wd:Q5;
    wdt:P69 wd:Q666128;
    wdt:P106 ?occupation.
  SERVICE wikibase:label { bd:serviceParam wikibase:language "en". }
}
GROUP BY ?occupationLabel
ORDER BY (?count)

There is so much that could be done with this data. 

So now I'm thinking what are universities actually good at producing. 

It looks like athletes. Is this the job of a public university? I think that I could argue that universities have failed becuase the thing they they are best at producing is atheletes.

I think I can say society has failed to a degree because the thing that we are best at producing is athletes. 

The ordinary person is working and being taxed and those funds go to support creating athletes. What a waste of tax dollars. Universities should seperate from sports.

SELECT ?item ?itemLabel ?headquarters_location ?headquarters_locationLabel ?coord WHERE {
  ?item wdt:P361 wd:Q242345;
  OPTIONAL { ?item wdt:P159 ?headquarters_location. }
  Optional { ?headquarters_location wdt:P625 ?coord }
  SERVICE wikibase:label { bd:serviceParam wikibase:language "en". }
  
}