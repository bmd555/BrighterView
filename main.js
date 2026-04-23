async function init() {
    await loadComponent('navbar', 'components/navbar/navbar.html');
    await loadComponent('mobile-view', 'components/mobileHero/mobileHero.html');
    await loadComponent('counselling-logo', 'components/logoDiv/logoDiv.html');
    await loadComponent('about',  'components/about/about.html');
    await loadComponent('emergency',  'components/emergency/emergency.html');
    await loadComponent('personal', 'components/personalProfile/personalProfile.html');
    await loadComponent('qualifications', 'components/qualifications/qualifications.html');
    await loadComponent('sessionDetails', 'components/sessionDetails/sessionDetails.html');



    loadStylesheet('components/navbar/navbar.css');
    loadStylesheet('components/mobileHero/mobileHero.css');
    loadStylesheet('components/logoDiv/logoDiv.css');
    loadStylesheet('components/about/about.css');
    loadStylesheet('components/emergency/emergency.css');
    loadStylesheet('components/personalProfile/personalProfile.css');
    loadStylesheet('components/qualifications/qualifications.css');
    loadStylesheet('components/sessionDetails/sessionDetails.css');



    const script = document.createElement('script');
    script.src = 'components/navbar/navbar.js';
    document.body.appendChild(script);

    const rcScript = document.createElement('script');
    rcScript.src = 'components/recommends/recommends.js';
    document.body.appendChild(rcScript);

    loadMarkdownInto('about-content', 'content/about.md');
    loadMarkdownInto('emergency-content', 'content/emergency.md');
    loadMarkdownInto('personal-content', 'content/personalProfile.md');
    loadMarkdownInto('qualifications-content', 'content/qualifications.md');
    loadMarkdownInto('sessionDetails-content', 'content/sessionDetails.md');
}

init();
