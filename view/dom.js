        const form = document.getElementById('form');
        const url = document.getElementById('url');
        const description = document.getElementById('description');
        const list = document.getElementById('list');

        form.addEventListener('submit', post);

        function post(e) {
            e.preventDefault();
    
            const imgurl = url.value;
            const postdescription = description.value;

            const post = {
                img: imgurl,
                description: postdescription,
            };

            axios
                .post('http://localhost:3000/postdescription', post)
                .then((res) => {
                    createCard(res.data);
                    console.log(res)
                })
                .catch((err) => {
                    console.log(err);
                });

            console.log(post);
        }

function createCard(res) {
    //console.log(res)
    const div=document.createElement('div');
    div.className='divclass'
    const id=res.id
    //console.log(id)
    div.id =`Post${id}`
    const li = document.createElement('li');
    const imageElement = document.createElement('img');
    imageElement.style.border='gray'
    imageElement.src = `http://drive.google.com/uc?export=view&id=${res.img}`;
    li.appendChild(imageElement);

    const description = document.createElement('h5');
    description.innerText = res.description;
    li.appendChild(description);

    const commentInput = document.createElement('input');
    commentInput.id = 'commenttext';
    commentInput.name = 'commenttext';
    li.appendChild(commentInput);

    const commentButton = document.createElement('button');
  commentButton.className='btn btn-primary'

    commentButton.textContent = 'Add Comment';
    li.appendChild(commentButton);

    const commentsContainer = document.createElement('div');
    li.appendChild(commentsContainer);

    commentButton.addEventListener('click', () => {
        const commentText = commentInput.value;
        if (commentText) {
            const comment = document.createElement('p');
            comment.innerText = commentText;
            commentsContainer.appendChild(comment);

            const postid = res.id;
            console.log(postid);
            const obj = {
                comment: commentInput.value,
                postid: postid,
            };
            axios
                .post('http://localhost:3000/postcomments', obj)
                .then((res) => {
                    console.log('Comment posted successfully');
                })
                .catch((err) => {
                    console.log(err);
                });

            commentInput.value = '';
        }
    });
    div.appendChild(li);
    list.appendChild(div);
}

function createCommentCard(comment) {
   // console.log(comment)
    const div = document.getElementById(`Post${comment.postId}`)
   // console.log(div)
    const li = document.createElement('li');
    const commentText = document.createElement('p');
    commentText.innerText = comment.text;
    li.appendChild(commentText);
    div.appendChild(li);
}

window.addEventListener('DOMContentLoaded', async () => {
    try {
        let res = await axios.get('http://localhost:3000/getposts');
        for (var i = 0; i < res.data.length; i++) {
           // console.log(res.data);
            createCard(res.data[i]);
        }
    } catch (error) {
        console.log(error);
    }

    try {
        let commentsRes = await axios.get('http://localhost:3000/getcomments');
        for (var i = 0; i < commentsRes.data.length; i++) {
           // console.log(commentsRes.data);
            createCommentCard(commentsRes.data[i]);
        }
    } catch (error) {
        console.log(error);
    }
});



