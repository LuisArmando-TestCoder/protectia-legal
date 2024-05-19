<script>
    export let showModal = false; // Controls whether the modal is visible
  
    // Sample image URL (replace with your own)
    export const imageUrl = 'https://example.com/your-image.jpg';
  
    // Sample data for likes (heart buttons)
    let isLiked = false;
  
    // Sample data for download buttons
    const downloadOptions = ['High Quality', 'Medium Quality', 'Low Quality'];
  </script>
  
  <style>
    /* Styles for the modal */
    .modal {
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-color: rgba(0, 0, 0, 0.5);
      display: flex;
      justify-content: center;
      align-items: center;
    }
  
    .modal-content {
      background-color: white;
      padding: 20px;
      border-radius: 8px;
      box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    }
  </style>
  
  {#if showModal}
    <div class="modal">
      <div class="modal-content">
        <img src={imageUrl} alt="Modal Image" />
  
        <!-- Heart button (likes) -->
        <label>
          <input type="checkbox" bind:checked={isLiked} />
        </label>
  
        <!-- First list (labeled by h3) -->
        <h3>Download Options</h3>
        <ul>
          {#each downloadOptions as option}
            <li>
              <button>{option}</button>
            </li>
          {/each}
        </ul>
  
        <!-- Second list (labeled by h3) -->
        <h3>Other Actions</h3>
        <ul>
          <li>
            <button>Share</button>
          </li>
          <li>
            <button>Report</button>
          </li>
        </ul>
      </div>
    </div>
  {/if}