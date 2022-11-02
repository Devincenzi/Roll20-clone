import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { jwtVerify } from 'jose';

const secret = process.env.SECRET;
const PUBLIC_FILE = /\.(.*)$/;

export async function middleware(request: NextRequest) {
  const url = request.nextUrl.clone();

  if(PUBLIC_FILE.test(url.pathname))
    NextResponse.next();

  const { cookies } = request;
  const jwt = cookies.get("loginJWT");

  if(url.pathname.includes('/admin')){
    if(jwt === undefined){
      url.pathname = '/login';
      return NextResponse.redirect(url);
    }

    try {
      await jwtVerify(jwt, new TextEncoder().encode(secret));

      return NextResponse.next();
    }catch(e){
      url.pathname = '/login';
      return NextResponse.redirect(url);
    }
  }

  return NextResponse.next();

  // const cookieUser = NextResponse.next().cookies.get('user');
  // const cookies = new Cookies(request, NextResponse);
  // const cookieUser = cookies.get('user');
  // console.log(cookieUser);
  
  // if (url.pathname.startsWith('/admin')) {
  //   url.pathname = '/login';
  //   console.log('restrito');
  //   return NextResponse.redirect(url);
  // }

  // if(url.pathname.startsWith('/admin')){
  //   console.log('não restrito');
  //   return NextResponse.redirect(url);
  // }
}