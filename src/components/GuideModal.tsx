// components/GuideModal.tsx
import React from 'react';
import { ModalType, useModal } from '../store/modalStore';

const GuideModal: React.FC = () => {
 const { close } = useModal(ModalType.GUIDE);

 return (
   <dialog id={ModalType.GUIDE} className="modal">
     <div className="modal-box max-w-4xl max-h-[90vh]">
       <form method="dialog">
         <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
       </form>

       <h3 className="text-2xl font-bold text-right mb-6">📚 راهنمای کامل درآمدزایی</h3>

       <div className="space-y-6 overflow-y-auto max-h-[70vh]" style={{ direction: 'rtl' }}>
         
         {/* چطور کار می‌کنه؟ */}
         <div className="card bg-info/10 border border-info/20">
           <div className="card-body">
             <h4 className="card-title text-right">🔍 چطور کار می‌کنه؟</h4>
             <div className="space-y-3">
               <div className="alert alert-info">
                 <span>قدم ۱: شما ۱۰۰ تومان واریز می‌کنید</span>
               </div>
               <div className="bg-base-200 rounded-lg p-3 text-sm space-y-1">
                 <div>• ۴۰ تومان برای خودتون می‌مونه 💵</div>
                 <div>• ۵۰ تومان به معرف شما می‌ره 👆</div>
                 <div>• ۱۰ تومان به معرف معرف شما می‌ره 👆👆</div>
               </div>
             </div>
           </div>
         </div>

         {/* مثال عملی */}
         <div className="stats stats-vertical shadow w-full">
           <div className="stat">
             <div className="stat-title text-right">اگر شما ۱۰۰ تومان واریز کنید</div>
             <div className="stat-value text-primary text-right">۴۰ تومان</div>
             <div className="stat-desc text-right">برای خودتون</div>
           </div>
           <div className="stat">
             <div className="stat-title text-right">اگر ۲ نفر بیارید</div>
             <div className="stat-value text-secondary text-right">۱۰۰ تومان</div>
             <div className="stat-desc text-right">درآمد اضافی از هر ۲ نفر</div>
           </div>
           <div className="stat">
             <div className="stat-title text-right">مجموع درآمد شما</div>
             <div className="stat-value text-success text-right">۱۴۰ تومان</div>
             <div className="stat-desc text-right">از ۱۰۰ تومان واریز اولیه</div>
           </div>
         </div>

         {/* جدول درآمد */}
         <div className="card bg-base-100 shadow">
           <div className="card-body">
             <h4 className="card-title text-right">📋 جدول ساده درآمد</h4>
             <div className="overflow-x-auto">
               <table className="table table-zebra text-right">
                 <thead>
                   <tr className="text-right">
                     <th className="text-right">درآمد شما</th>
                     <th className="text-right">واریز هر نفر</th>
                     <th className="text-right">تعداد افراد</th>
                   </tr>
                 </thead>
                 <tbody>
                   <tr>
                     <td className="text-success font-bold">۴۰ تومان</td>
                     <td>۱۰۰ تومان</td>
                     <td>فقط خودتون</td>
                   </tr>
                   <tr>
                     <td className="text-success font-bold">۱۴۰ تومان</td>
                     <td>۱۰۰ تومان</td>
                     <td>شما + ۲ نفر</td>
                   </tr>
                   <tr>
                     <td className="text-success font-bold">۱۸۰ تومان</td>
                     <td>۱۰۰ تومان</td>
                     <td>شما + ۲ + ۴ نفر</td>
                   </tr>
                   <tr>
                     <td className="text-success font-bold">۲۶۰ تومان</td>
                     <td>۱۰۰ تومان</td>
                     <td>شما + ۲ + ۴ + ۸ نفر</td>
                   </tr>
                 </tbody>
               </table>
             </div>
           </div>
         </div>

         {/* فرمول محاسبه */}
         <div className="card bg-secondary/10 border border-secondary/20">
           <div className="card-body">
             <h4 className="card-title text-right">🧮 فرمول ساده</h4>
             <div className="mockup-code text-right">
               <pre><code>درآمد شما = (واریز خودتون × ۴۰%) + (واریز زیردستان × ۵۰%) + (واریز زیردستان زیردستان × ۱۰%)</code></pre>
             </div>
           </div>
         </div>

         {/* نکات مهم */}
         <div className="space-y-2">
           <div className="alert alert-success">
             <span>✅ هر چی بیشتر واریز کنید، بیشتر درآمد دارید</span>
           </div>
           <div className="alert alert-success">
             <span>✅ هر چی بیشتر آدم بیارید، بیشتر درآمد دارید</span>
           </div>
           <div className="alert alert-warning">
             <span>❌ اگر کسی نیارید، فقط ۴۰% واریزتون رو می‌گیرید</span>
           </div>
         </div>

         {/* سوالات متداول */}
         <div className="space-y-2">
           <h4 className="text-lg font-bold text-right">❓ سوالات متداول</h4>
           <div className="collapse collapse-arrow bg-base-200">
             <input type="radio" name="faq-accordion" />
             <div className="collapse-title text-right font-medium">چرا باید پول واریز کنم؟</div>
             <div className="collapse-content text-right text-sm">
               <p>برای شروع سیستم و دریافت سهم خودتون + درآمد از معرفی‌ها</p>
             </div>
           </div>
           <div className="collapse collapse-arrow bg-base-200">
             <input type="radio" name="faq-accordion" />
             <div className="collapse-title text-right font-medium">پولم برمی‌گرده؟</div>
             <div className="collapse-content text-right text-sm">
               <p>بله، حداقل ۴۰% + درآمد از معرفی‌هاتون دریافت می‌کنید</p>
             </div>
           </div>
           <div className="collapse collapse-arrow bg-base-200">
             <input type="radio" name="faq-accordion" />
             <div className="collapse-title text-right font-medium">کی پول رو دریافت می‌کنم؟</div>
             <div className="collapse-content text-right text-sm">
               <p>فوری! به محض اینکه کسی از لینک شما واریز کنه</p>
             </div>
           </div>
         </div>

         {/* خلاصه نهایی */}
         <div className="alert alert-info">
           <div className="text-center w-full">
             <div className="text-lg font-bold">🎯 خلاصه خیلی ساده</div>
             <div className="text-sm mt-2">
               <div><strong>واریز کردید؟</strong> → ۴۰% برای خودتون</div>
               <div><strong>آدم آوردید؟</strong> → ۵۰% از واریز اونا</div>
               <div><strong>اونا آدم آوردن؟</strong> → ۱۰% از واریز اونا</div>
               <div className="text-lg font-bold text-success mt-2">🚀 بیشتر بیارید = بیشتر درآمد!</div>
             </div>
           </div>
         </div>

       </div>

       <div className="modal-action">
         <form method="dialog">
           <button className="btn btn-primary btn-lg w-full" onClick={close}>
             🚀 فهمیدم! شروع کنیم
           </button>
         </form>
       </div>
     </div>
   </dialog>
 );
};

export default GuideModal;