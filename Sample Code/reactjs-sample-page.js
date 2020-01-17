import React, { Component } from 'react';
import Link from 'next/link';
import Layout from '../layouts/default';
import KakaoLogin from 'react-kakao-login';
import { reduxForm } from 'redux-form';
import withRequireNotAuth from '../hocs/withRequireNotAuth';
import { connect } from 'react-redux';
import { postSocialKaKao } from '../actions/auth';
import withRequireAuth from '../hocs/withRequireAuth';

class LoginMain extends Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }

  async onLoginKakao(e) {
    const data = {
      access_token: e.response.access_token,
    };
    await this.props.postSocialKaKao(data);
  }

  render() {
    return (
      <Layout>
        <div id='container'>
          <div id='login' className='p_login'>
            <div className='layout_fix'>
              <div className='account_area'>
                <div className='panel_wrap'>
                  <div className='panel_layer'>
                    <div className='con'>
                      <div className='heading'>
                        <h2 className='tit'>
                          <img
                            src='/static/assets/images/msg_welcome.svg'
                            alt=''
                            className='img_welcome'
                          />
                        </h2>
                        <h3 className='sub_tit'>
                          우리 아이 스타일을 시작하세요
                        </h3>
                      </div>
                      <div className='btn_primary'>
                        <KakaoLogin
                          onSuccess={result => this.onLoginKakao(result)}
                          onFailure={result => console.log(result)}
                          render={props => (
                            <div onClick={props.onClick}>
                              <a className='btn_kakao'>카카오톡으로 로그인</a>
                            </div>
                          )}
                          // through
                          getProfile={true}
                        />
                        <Link href='/auth/signin'>
                          <a className='btn_email'>이메일로 로그인</a>
                        </Link>
                      </div>
                      <div className='panel_footer'>
                        <h4 className='txt'>
                          아직 회원이 아니신가요?{' '}
                          <Link href='/auth/signup'>
                            <a className='link'>회원 가입 하기</a>
                          </Link>
                        </h4>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    );
  }
}

function mapStateToProps(state, props) {
  const {
    auth: { authenticated },
  } = state;

  return { authenticated };
}

export default connect(mapStateToProps, {
  postSocialKaKao,
})(withRequireNotAuth(LoginMain));
