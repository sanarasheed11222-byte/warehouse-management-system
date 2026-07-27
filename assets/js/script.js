document.getElementById('sidebarToggle')?.addEventListener('click', () => {
  document.getElementById('sidebar').classList.toggle('show');
});
document.getElementById('loginForm')?.addEventListener('submit', function(e) {
  e.preventDefault();
  if (!this.checkValidity()) {
    e.stopPropagation();
  }
  this.classList.add('was-validated');
});
document.getElementById('signupForm')?.addEventListener('submit', function(e) {
  e.preventDefault();
  if (!this.checkValidity()) {
    e.stopPropagation();
  }
  this.classList.add('was-validated');
});
document.getElementById('addProductForm')?.addEventListener('submit', function(e) {
  e.preventDefault();
  if (!this.checkValidity()) {
    e.stopPropagation();
  }
  this.classList.add('was-validated');
});
document.getElementById('editProductForm')?.addEventListener('submit', function(e) {
  e.preventDefault();
  if (!this.checkValidity()) {
    e.stopPropagation();
  }
  this.classList.add('was-validated');
});
document.getElementById('orderForm')?.addEventListener('submit', function(e) {
  e.preventDefault();
  if (!this.checkValidity()) {
    e.stopPropagation();
  }
  this.classList.add('was-validated');
});