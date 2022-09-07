<!DOCTYPE html>
<html lang="en">
   <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Document</title>
   </head>
   <body>
      <div style="font-family:helvetica,sans-serif;margin:0 auto;padding:0" bgcolor="white">
         <center>
            <table class="m_739463944344111099container600" cellpadding="0" cellspacing="0" border="0" width="100%" style="width:calc(600px);border-collapse:collapse;margin:0 auto;padding:0">
               <tbody>
                  <tr style="border-collapse:collapse;margin:0;padding:0">
                     <td width="100%" style="border-collapse:collapse;margin:0;padding:0">
                        <table width="100%" cellpadding="0" cellspacing="0" border="0" style="min-width:100%;border-collapse:collapse;margin:0;padding:0">
                           <tbody>
                              <?php $this->load->view('mailviews/layout/header') ?>
                              <tr style="border-collapse:collapse;margin:0;padding:0">
                                 <td width="100%" style="min-width:100%;border-collapse:collapse;margin:0;padding:0">
                                    <center>
                                       <table class="m_739463944344111099container560 m_739463944344111099full-width" cellpadding="0" cellspacing="0" border="0" width="100%" style="width:calc(560px);border-collapse:collapse;margin:0 auto;padding:0">
                                          <tbody>
                                             <tr style="border-collapse:collapse;margin:0;padding:0">
                                                <td width="100%" style="border-collapse:collapse;margin:0;padding:0">
                                                   <table class="m_739463944344111099jobs-list" cellpadding="0" cellspacing="0" width="100%" style="border-collapse:collapse;margin:0;padding:0">
                                                      <tbody>
                                                         <tr style="border-collapse:collapse;margin:0;padding:0">
                                                            <td height="20" style="border-collapse:collapse;margin:0;padding:0">&nbsp;</td>
                                                         </tr>
                                                         <tr style="border-collapse:collapse;margin:0;padding:0">
                                                            <td style="border-collapse:collapse;margin:0;padding:0">
                                                               <table width="100%" class="m_739463944344111099image" align="left" cellpadding="0" cellspacing="0" border="0" style="border-collapse:collapse;margin:0;padding:0">
                                                                  <tbody>
                                                                     <tr style="border-collapse:collapse;margin:0;padding:0">
                                                                        <td align="left" width="50" style="border-collapse:collapse;margin:0;padding:0">
                                                                           <img src="https://aims.education/wp-content/uploads/2020/03/student-login.png" width="50" style="border-radius:50%" class="CToWUd">
                                                                        </td>
                                                                        <td class="m_739463944344111099title-area" valign="top" align="left" style="border-collapse:collapse;height:5px;margin:0;padding:0 0 0 14px">
                                                                           <h4 style="font-family:helvetica,sans-serif;color:#333;font-size:17px;line-height:20px;margin:0;padding:0">Hello,</h4>
                                                                           <div style="height:5px"></div>
                                                                           <p style="font-family:helvetica,sans-serif;text-decoration:none;color:#333;font-weight:300;display:inline;font-size:15px;line-height:24px;margin:0;padding:0"><?php echo $name ?></p>
                                                                        </td>
                                                                     </tr>
                                                                  </tbody>
                                                               </table>
                                                            </td>
                                                         </tr>
                                                         <tr style="border-collapse:collapse;margin:0;padding:0">
                                                            <td height="8" style="border-collapse:collapse;margin:0;padding:0"></td>
                                                         </tr>
                                                         <tr valign="top" style="border-collapse:collapse;margin:0;padding:0">
                                                            <td style="border-collapse:collapse;margin:0;padding:0">
                                                               <p style="font-family:helvetica,sans-serif;text-decoration:none;color:#333;font-weight:300;display:inline;font-size:15px;line-height:24px;margin:0;padding:0">
                                                                 Your account has now been setup and this email contains all the information you will need in order to begin using your account.
                                                               </p>
                                                               <br/>
                                                               <p style="font-family:helvetica,sans-serif;text-decoration:none;color:#333;font-weight:300;display:inline;font-size:15px;line-height:24px;margin:0;padding:0">
                                                                 Below are your temporary login credentials please use them to log into mobile app for first time
                                                               </p>
                                                            </td>
                                                         </tr>

                                                         <tr style="border-collapse:collapse;margin:0;padding:0">
                                                            <td height="8" style="border-collapse:collapse;margin:0;padding:0"></td>
                                                         </tr>
                                                         <tr valign="top" style="border-collapse:collapse;margin:0;padding:0">
                                                            <td style="border-collapse:collapse;margin:0;padding:0">
                                                               <h4 style="font-family:helvetica,sans-serif;text-decoration:none;color:#333;font-size:16px;display:inline;line-height:24px;margin:0;padding:0">
                                                               New Account Login Details
                                                               </h4>
                                                               <br/>
                                                              <p style="font-family:helvetica,sans-serif;text-decoration:none;color:#333;font-weight:300;display:inline;font-size:14px;line-height:24px;margin:0;padding:0">
                                                              Username: <?php echo $username  ?> <br/>

                                                                Password: <?php echo $password  ?>
                                                              </p>
                                                            </td>
                                                         </tr>
                                                         <tr style="border-collapse:collapse;margin:0;padding:0">
                                                            <td height="8" style="border-collapse:collapse;margin:0;padding:0"></td>
                                                         </tr>
                                                         <tr valign="top" style="border-collapse:collapse;margin:0;padding:0">
                                                            <td style="border-collapse:collapse;margin:0;padding:0">
                                                               <p style="font-family:helvetica,sans-serif;text-decoration:none;color:#333;font-weight:300;display:inline;font-size:15px;line-height:24px;margin:0;padding:0">
                                                                 We request you to not to share these credentials with anyone
                                                               </p>
                                                              
                                                            </td>
                                                         </tr>
                                                         <tr style="border-collapse:collapse;margin:0;padding:0">
                                                            <td height="15" style="border-collapse:collapse;margin:0;padding:0"></td>
                                                         </tr>
                                                         <tr style="border-collapse:collapse;margin:0;padding:0">
                                                            <td height="10" style="border-collapse:collapse;margin:0;padding:0"></td>
                                                         </tr>
                                                      </tbody>
                                                   </table>
                                                   <?php  $this->load->view('mailviews/layout/footer')  ?>
                                                </td>
                                             </tr>
                                          </tbody>
                                       </table>
                                    </center>
                                 </td>
                              </tr>
                           </tbody>
                        </table>
                     </td>
                  </tr>
               </tbody>
            </table>
         </center>
      </div>
   </body>
</html>