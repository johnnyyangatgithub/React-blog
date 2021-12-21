import React from 'react';
import { connect } from 'react-redux';
import { fetchPostsAndUsers } from '../actions';
import UserHeader from './UserHeader';

class PostList extends React.Component {
    componentDidMount() {
        this.props.fetchPostsAndUsers();
    };

    renderList = () => {
        return this.props.posts.map(post => {
            return (
                <div className='item' key={post.id}>
                    <i className='largle middle aligned icon user' />
                    <div className='content'>
                        <div className='description'>
                            <h2>{post.title}</h2>
                            <p>{post.body}</p>
                        </div>
                        <UserHeader userId={post.userId} />
                    </div>
                </div>
            );
        });
    };

    render() {

        return <div className='ui relaxed divided list'>{this.renderList()}</div>
    }
};

//这里的state是从reducers里面传过来的，参数就是posts的对象,用posts接收到参数后，传到下面connect里面，实现react和redux的沟通
const mapStateToProps = (state) => {
    return { posts: state.posts };
};

export default connect(mapStateToProps, { fetchPostsAndUsers })(PostList);