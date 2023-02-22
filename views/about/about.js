//create constants 
const content = [
    {
      title: "Matric grade 12 (2014)",
      subtitle: ""
    },
    {
      title: "Software engineer NQF level 5 2022",
      subtitle: ""
    },
    {
      title: "Day care website",
      subtitle: "Day care website using ReactJS."
    },
    {
      title: "Back-end Developer intern",
      subtitle: "Four months internship as a backend developer.",
      skills: ["PHP", "Symfony", "GitHub", "Docker"]
    },
    {
      title: "Java 16 OOP Back-end",
      subtitle: "Java OOP, Maven, junit and Javelin"
    },
    {
      title: "Python3",
      subtitle: "Python dundermentals"
    }
  ];

  
  function createContentElement(contentItem) {
    const container = document.createElement("div");
    container.classList.add("row", "row2");
  
    const title = document.createElement("h2");
    title.textContent = contentItem.title;
  
    const subtitle = document.createElement("p");
    subtitle.textContent = contentItem.subtitle;
  
    container.appendChild(title);
    container.appendChild(subtitle);
  
    if (contentItem.skills) {
      const skills = document.createElement("ul");
      for (const skill of contentItem.skills) {
        const skillItem = document.createElement("li");
        skillItem.textContent = skill;
        skills.appendChild(skillItem);
      }
      container.appendChild(skills);
    }
  
    return container;
  }

  
  const dynamicContent = document.getElementById("dynamic-content");

  for (const contentItem of content) {
    const contentElement = createContentElement(contentItem);
    dynamicContent.appendChild(contentElement);
  }
  