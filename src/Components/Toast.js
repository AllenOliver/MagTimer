import React from 'react';
class Toast extends React.Component {
    constructor() {
        super();
        this.state = {brand: "Ford"};
      }

    render() {
        return (
            <div>
                <div class="toast" role="alert" aria-live="assertive" aria-atomic="true">
                    <div class="toast-header">
                        <button type="button" class="ml-2 mb-1 close" data-dismiss="toast" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div class="toast-body">See? Just like this.</div>
                </div>

            </div>
        );
    }
}

export default Toast;