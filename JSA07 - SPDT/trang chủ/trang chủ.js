 // ----- Khi click một slot thời gian => điền vào input datetime (giữ ngày hiện tại) -----
    document.querySelectorAll('.slot').forEach(el=>{
      el.addEventListener('click', ()=>{
        // Toggle active class
        document.querySelectorAll('.slot').forEach(s=>s.classList.remove('active'));
        el.classList.add('active');

        // Build datetime string: today date with time from slot (if time already passed, keep date tomorrow)
        const time = el.textContent.trim(); // e.g. "18:00"
        const [hh,mm] = time.split(':').map(Number);

        let d = new Date();
        d.setHours(hh, mm, 0, 0);

        // if chosen time earlier than now, add 1 day
        if (d < new Date()) d.setDate(d.getDate()+1);

        // format to input value yyyy-MM-ddTHH:mm
        const pad = n => n.toString().padStart(2,'0');
        const value = `${d.getFullYear()}-${pad(d.getMonth()+1)}-${pad(d.getDate())}T${pad(d.getHours())}:${pad(d.getMinutes())}`;
        document.getElementById('datetime').value = value;
        // scroll to booking form
        document.getElementById('datetime').scrollIntoView({behavior:'smooth', block:'center'});
      });
    });

    // ----- Form validation (bootstrap style) -----
    const bookingForm = document.getElementById('bookingForm');
    const confirmModal = new bootstrap.Modal(document.getElementById('confirmModal'));
    const confirmSendBtn = document.getElementById('confirmSend');

    bookingForm.addEventListener('submit', function(e){
      e.preventDefault();
      // Basic validation rules
      const name = document.getElementById('name');
      const phone = document.getElementById('phone');
      const email = document.getElementById('email');
      const guests = document.getElementById('guests');
      const datetime = document.getElementById('datetime');
      const note = document.getElementById('note');

      // reset validation
      [name,phone,email,datetime].forEach(inp=>{
        inp.classList.remove('is-invalid');
      });

      let ok = true;

      if (name.value.trim().length < 2){ name.classList.add('is-invalid'); ok=false; }
      // phone: 10 digits starting with 0 or +84 formats
      const phoneVal = phone.value.trim();
      if (!/^(0\d{9}|(\+84)\d{9})$/.test(phoneVal)) { phone.classList.add('is-invalid'); ok=false; }

      const emailVal = email.value.trim();
      if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailVal)) { email.classList.add('is-invalid'); ok=false; }

      if (!datetime.value){ datetime.classList.add('is-invalid'); ok=false; } else {
        const chosen = new Date(datetime.value);
        if (isNaN(chosen.getTime())) { datetime.classList.add('is-invalid'); ok=false; }
      }

      if (!ok) return;

      // fill modal content
      document.getElementById('c_name').textContent = name.value;
      document.getElementById('c_phone').textContent = phone.value;
      document.getElementById('c_email').textContent = email.value;
      document.getElementById('c_guests').textContent = guests.value + (guests.value > 1 ? ' khách' : ' khách');
      // friendly datetime string
      const dt = new Date(datetime.value);
      document.getElementById('c_time').textContent = dt.toLocaleString('vi-VN', { dateStyle:'medium', timeStyle:'short' });
      document.getElementById('c_note').textContent = note.value || '—';

      // show modal
      confirmModal.show();
    });

    // Confirm send: simulate sending + success alert + reset
    confirmSendBtn.addEventListener('click', ()=>{
      confirmSendBtn.disabled = true;
      confirmSendBtn.textContent = 'Đang gửi...';

      // fake delay
      setTimeout(()=>{
        confirmSendBtn.disabled = false;
        confirmSendBtn.textContent = 'Gửi yêu cầu';
        confirmModal.hide();

        // success toast (simple)
        showToast('Đặt bàn thành công! Chúng tôi sẽ gọi lại để xác nhận.', 'success');

        // reset form
        bookingForm.reset();
        document.querySelectorAll('.slot').forEach(s=>s.classList.remove('active'));
      }, 1200);
    });

    // Clear button
    document.getElementById('clearBtn').addEventListener('click', ()=>{
      bookingForm.reset();
      document.querySelectorAll('.slot').forEach(s=>s.classList.remove('active'));
      // remove validation states
      Array.from(bookingForm.querySelectorAll('.form-control')).forEach(i=>i.classList.remove('is-invalid'));
    });

    // Simple toast (bottom-right)
    function showToast(message, type='info'){
      const toast = document.createElement('div');
      toast.className = 'position-fixed bottom-0 end-0 mb-3 me-3 p-3 rounded shadow';
      toast.style.zIndex = 1080;
      toast.style.minWidth = '260px';
      toast.style.background = (type==='success') ? 'linear-gradient(90deg,#0ea5a4,#34d399)' : '#333';
      toast.style.color = '#fff';
      toast.innerHTML = `<strong style="display:block;margin-bottom:6px">${message}</strong>`;
      document.body.appendChild(toast);
      setTimeout(()=> { toast.style.opacity = '0'; toast.style.transform='translateY(10px)'; }, 2200);
      setTimeout(()=> toast.remove(), 2800);
    }

    // Accessibility: enable keyboard selection of slots
    document.querySelectorAll('.slot').forEach(s => {
      s.setAttribute('tabindex','0');
      s.addEventListener('keydown', e => { if (e.key==='Enter' || e.key===' ') s.click(); });
    });
