import Image from "next/image";
import Header from "../components/walls/header";
import ImageBlock from "../components/walls/imageBlock";

export default function PageAowu() {
  return (
    <main className="h-[300vh] bg-slate-800">
      <Header />
      <ImageBlock src="/images/ser-village.jpg" width="1024" height="1024" alt="Server-Village">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum molestie hendrerit elementum. Mauris dolor velit, euismod vel hendrerit vel, maximus eget nisl. Quisque vitae libero dui. Duis sagittis lacus id sem elementum rhoncus. Nunc at erat pellentesque, imperdiet augue in, suscipit tellus. Cras sapien tellus, faucibus sit amet turpis non, bibendum sagittis lorem. Donec velit neque, elementum sodales leo eget, molestie mattis metus.

Aliquam erat volutpat. Aliquam erat volutpat. Ut maximus tortor vitae leo blandit, lacinia commodo nunc mollis. Aliquam ac orci id magna laoreet laoreet scelerisque eu sapien. Fusce enim risus, bibendum eu laoreet eget, pellentesque vitae ipsum. Sed semper blandit urna, nec facilisis sapien efficitur at. Nullam orci nunc, efficitur at justo non, facilisis dignissim nibh. Vestibulum accumsan dictum consectetur. Nulla turpis urna, consectetur sed neque at, hendrerit sagittis tellus. Aliquam facilisis, odio quis commodo placerat, nibh enim pharetra urna, quis faucibus nibh risus et ipsum.

Sed luctus sem sem, varius ornare felis euismod eu. Aenean faucibus maximus egestas. Etiam tempor congue elit, vulputate porta mi egestas ut. Pellentesque commodo finibus dignissim. Phasellus pharetra vel urna vel vehicula. In hac habitasse platea dictumst. Donec cursus sodales felis, vitae rutrum justo placerat id. Morbi bibendum tristique magna vel venenatis. Duis tincidunt malesuada risus sit amet interdum. Mauris nulla odio, facilisis at quam eu, scelerisque fermentum mi. Aenean consectetur porttitor placerat. Nam lectus ante, rhoncus at fringilla a, tempus eu nunc.

Vivamus sodales velit nec suscipit aliquam. Nullam quis hendrerit dolor. Curabitur mauris turpis, auctor vitae imperdiet non, porta in mauris. Integer commodo libero euismod ultricies vehicula. Nam vel sapien quis nisi condimentum placerat sit amet eu sem. Curabitur eu sapien lacus. Integer et orci turpis. Morbi iaculis fermentum facilisis. Fusce lacus mauris, feugiat sed sem sit amet, accumsan pharetra enim. Nam condimentum a nunc et lacinia. Cras quam leo, gravida dignissim accumsan sit amet, tempus sit amet risus. Mauris augue nisi, mattis a finibus non, semper a nibh. Ut pretium magna quis leo convallis luctus. Integer rutrum lobortis placerat. Nam in iaculis eros, eu ultricies eros. Quisque pretium est quis nunc sodales ullamcorper.

Quisque nec ante ut ligula malesuada efficitur a a nulla. Nulla ornare mi quis leo fermentum gravida. Mauris vehicula maximus magna ac finibus. Aliquam pretium auctor elit, ullamcorper iaculis sem congue nec. Vivamus ultrices justo ante, vel fringilla odio imperdiet vel. Nunc semper ipsum id rhoncus malesuada. Nunc finibus nec risus vel gravida. Vestibulum sodales ipsum ut facilisis commodo.
      </ImageBlock>
      <ImageBlock src="/images/ser-survival.jpg" width="1024" height="1024" alt="Server-Survival" block={
        {mobileHeight: 'h-[200vw]', mobileImageWidth: 'w-1/2'}
      }>
        太纯净的生存
      </ImageBlock>
    </main>
  )
}