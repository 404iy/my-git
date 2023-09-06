import { Modal } from 'bootstrap'; // bootstrap 5

document.addEventListener('core:server-side-message', function(event) {
    const html = `
        <div id="serverErrorModal" class="modal fade" tabindex="-1">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                        ${event.detail.content}
                    </div>
                 </div>
            </div>
        </div>
`;

    document.querySelector('body').insertAdjacentHTML('beforeend', html);

    const element = document.getElementById('serverErrorModal');

    new Modal(element).show();

    element.addEventListener('hide.bs.modal', function() {
        element.remove();
    });
});
