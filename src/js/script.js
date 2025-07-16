// Fetch Data Certificate 
fetch('./assets/data/certificationData.json')
  .then(response => response.json())
  .then(data => {
    const container = document.getElementById('certificateContainer');

    data.forEach(item => {
      const col = document.createElement('div');
      col.className = 'col';

      col.innerHTML = `
            <div class="card h-100">
              <div class="card-body">
                <h5 class="card-title">${item.title}</h5>
                <h6 class="card-subtitle mb-2 text-body-secondary">${item.platform}</h6>
                <p class="card-text">Credential:
                  <a href="${item.credential}" target="_blank">Browse</a>
                </p>
                <a href="${item.preview}" target="_blank" class="card-link">Preview</a>
              </div>
            </div>
          `;

      container.appendChild(col);
    });
  })
  .catch(error => {
    console.error('Gagal memuat data.json:', error);
  });

// Fetch Data Project
fetch('./assets/data/projectData.json')
  .then(response => response.json())
  .then(data => {
    const container = document.getElementById('projectContainer');

    data.forEach(item => {
      const col = document.createElement('div');
      col.className = 'col-md-4';

      col.innerHTML = `
                <div class="card shadow-sm h-100">
                  <img src="${item.img}" class="card-img-top" alt="Project ${item.id}">
                  <div class="card-body">
                    <h5 class="card-title">${item.name}</h5>
                    <p class="card-text">${item.description}</p>
                    <a href="${item.url}" class="btn btn-sm btn-outline-primary">View Project</a>
                  </div>
                </div>
            `;

      container.appendChild(col);
    });
  })
  .catch(error => {
    console.error('Gagal memuat data.json:', error);
  });