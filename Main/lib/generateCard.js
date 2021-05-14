function generateCard(employee){
    return `    <div class="card" style="width: 18rem;">
    <img src="..." class="card-img-top" alt="...">
    <div class="card-body">
      <h5 class="card-title">Name: </h5>
      <p class="card-text">Role:</p>
    </div>
    <div class="card-body">
      <a href="#" class="card-link">${employee.name}</a>
      <a href="#" class="card-link">${employee.email}</a>
      <a href="#" class="card-link">${employee.github}`,`${employee.officeNumber}`,`${employee.school}``</a>

    </div>
  </div>`
}