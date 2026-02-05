// Simple interactivity: mobile menu and add-to-cart toast
document.addEventListener('DOMContentLoaded',()=>{
  const menuBtn = document.getElementById('menuBtn');
  const nav = document.getElementById('nav');
  const toast = document.getElementById('toast');

  if(menuBtn && nav){
    menuBtn.addEventListener('click',()=>nav.classList.toggle('show'))
  }

  function showToast(msg){
    if(!toast) return;
    toast.textContent = msg;
    toast.classList.add('show');
    setTimeout(()=>toast.classList.remove('show'),1800);
  }

  document.querySelectorAll('.js-add').forEach(btn=>{
    btn.addEventListener('click',e=>{
      e.preventDefault();
      const name = btn.dataset.name || 'Item';
      showToast(name + ' added to cart');
    })
  })

  // Scroll reveal using IntersectionObserver
  const observer = new IntersectionObserver((entries)=>{
    entries.forEach(entry=>{
      if(entry.isIntersecting){
        entry.target.classList.add('reveal');
        observer.unobserve(entry.target);
      }
    })
  },{threshold:0.12});

  // observe elements with data-reveal attribute or cards/products
  document.querySelectorAll('[data-reveal], .card, .product').forEach(el=>{
    observer.observe(el);
  });
})
