import React from 'react'
import SyntaxHighlighter from 'react-syntax-highlighter'
import { docco } from 'react-syntax-highlighter/dist/esm/styles/hljs'
import { useTranslation } from "react-i18next"

function Portfolio() {
  const { t } = useTranslation(['translationGeneral'])

  return (
    <>
      <div className='info'>{t('no-translation')}</div>      <h1>Portfolio</h1>
      <p>This page contains a few projects and snippets I've done that may be of some relevance regarding technologies I've interacted with.</p>
      <p>Due to the fact that my primary work involves development and problems solving for different clients, much of my main work is not publically available,
        therefor, what is presented here is either kind of old by this point or things that I've done in my free time. 
      </p>
      <h3>This website</h3>
      <p>Built using some of the technologies I have recently found the beauty of, like React, Node.js, GraphQL and MongoDB, as a small showcase of what I can do with them.</p>
      <p>The backend was not really needed for this, but I build one just for demo purposes, like for example the completely useless login system.</p>
      <a className='btn btn-primary' href='https://github.com/ppantiru/TSCV/tree/thinporto' target="_blank" rel="noreferrer">Source code</a>
      <br/><br/>
      <h3>The xwiki.com website</h3>
      <p>This has nothing to do with node and react, but it's more of an example of a publically available website I've worked as an architect/lead developer on, with the restriction of using the xwiki platform as a basis.
        But keep in mind this was about 5 years ago, and there are a lot of things I would do differently now.</p>
      <img className='demo' alt='xwiki.com' src='xcom.png'></img><br/><br/>
      <a className='btn btn-primary' href='https://xwiki.com' target="_blank" rel="noreferrer">Visit website</a>
      <br/><br/>
      <h3>Launchpad</h3>
      <p>This one's a project I did for myself, after seeing and wanting an <a href='https://www.elgato.com/en/stream-deck'>Elgato stream deck</a>. I was about to buy it but 
      realized it doesn't have official linux support, and also that I can build one myself for little to no cost.</p>
      <p>I already had the hardware; an old tablet that I wasn't using anymore, all I needed was the software which turns out was not very complicated to build, so I had it 
        working within a weekend.</p>
      <p>A server running on my laptop which controlled various scripts and processes, a react client interface accessible from the tablet and voilà relatively free Stream deck
        that's not even restricted to a limited number of buttons because I have an entire touchscreen to put anything I want on it.
        The beauty is that to add new buttons and functionality, I only need to modify a rather simple <a href='https://github.com/ppantiru/Launchpad/blob/main/command-center-api/Makefile'>Makefile</a>.
      </p>
      <p>
        The main thing I actually use it for is one tap access to remote servers, but for legal and security reasons I cannot easily showcase that.
      </p>
      <p>A little demo:</p>
      <video className='demo' controls>
        <source src="Launchpad.mp4" type="video/mp4" />
      Your browser does not support the video tag.
      </video> 
      <br/>
      <a className='btn btn-primary' href='https://github.com/ppantiru/Launchpad' target="_blank" rel="noreferrer">Source code</a>
      <br/><br/>
      <h3>Bash application for backporting automation</h3>
      <p>This one's a bash application built to simplify the process of creating patches and backports between xwiki versions.</p>
      <p>From cherry-picking the needed commits to building them with maven running from a docker container (to avoid the need to actually setup maven beforehand)
        and committing the changes, all done semi-automatically (semi because you still need to feed it some information).</p>
      <a className='btn btn-primary' href='https://github.com/ppantiru/patchAutomation/tree/main/xwiki-support-tools' target="_blank" rel="noreferrer">Source code</a>
      <br/><br/>
      <h3>Python snippet</h3>
      <p>For a python projects I cannot provide a clear link to an example as they are mainly on private repositories for a reason,
      but what I can share is a snippet from a backup system I've developed a few years back.</p>
      <div className='scrollableSmall'>
        <SyntaxHighlighter language="python" style={docco}>
          {`
    def getCrtCloudBackupFiles(path):
    directories = []
    for dirs in os.listdir(path):
      if os.path.isdir("/home/backup/burp/" + str(dirs)):
        directories.append("/home/backup/burp/" + str(dirs) + "/current")
    return directories

    ##Returns the 1st key for sorting the list of files
    def backup_end_date(x):
      return str(x.split('to.')[-1].split('full.')[-1].split('signatures.')[-1].split('.')[0])

    ##Returns the 2nd key for sorting the list of files
    def vol_suffix(x):
      res = re.search('\\.vol(\\d+)\\.', x) 
      return int(res.group(1)) if hasattr(res, 'group') else 0

    ##Return a sorted list based on date and vol
    def sortList(list, is_reversed):
          return sorted(list, key=(backup_end_date(x), vol_suffix(x)), reverse=is_reversed)

    ##Returns an array containing all the backup files names in a directory and it's subdirectories (backups are determined by their encription .gpg extension)
    def getAllBackupFiles(path):
      gpgFileFormat = path + '**/*.gpg'
      gzFileFormat = path + '**/*.gz'
      try:
        gpgFiles = list(glob(gpgFileFormat, recursive=True))
        gzFiles = list(glob(gzFileFormat, recursive=True))
        files =  gpgFiles + gzFiles
        return sorted(files, key=(backup_end_date(x), vol_suffix(x)))
      except globError:
        print("List of file could not be compiled")

    ##Returns an array containing the backup file names form a specified directory and which contain a certain pattern
    def getBackupFilesOfType(path, pattern):
          files = []
          for file in getAllBackupFiles(path):
                  if pattern in file:
                          files.append(file)
          return sortList(files,False)

    ##Returns an array containing the backup file names used for a full backup
    def getFullBackupFiles(path):
      return getBackupFilesOfType(path, 'full', False)

    ##Returns an array containing the incremental backup file names 
    def getIncBackupFiles(path):
      return getBackupFilesOfType(path, 'inc', False)

    ##Returns an array containing the 'new' backup file names ?
    def getNewBackupFiles(path):
      return getBackupFilesOfType(path, 'new', False)

    ##Run bash command and return the proccess
    def runCmd(cmd):
      bashCommand = cmd
      subprocess.run(bashCommand, shell=True, check=True)

    ##Formats and partition the lto tape
    def formatTape():
      try:
        print("Attempt to format ltfs tape...")
        runCmd('/usr/local/bin/mkltfs --force --device=/dev/IBMtape0')
      except Exception as e:
        print("The tape format opperation failed" + str(e))

    ##Mounts the lto tape at the "/mnt/ltfs" location
    ##If the mount fails it formats it and tries again
    def mountTape():
      try:
        print("Attempt to mount ltfs tape...")
        runCmd('/usr/local/bin/ltfs /mnt/ltfs')
      except Exception as e:
        print("The tape mount failed with error: " + str(e))
        if e.returncode != 0:
          print('Tape is either too full or not formatted')
          formatTape()
          print('Retrying to mount ltfs tape...')
          try:
            runCmd('/usr/local/bin/ltfs /mnt/ltfs')
          except:
            print('Cannot mount tape, please check the state of the drive')	

    ##unmounts and ejects the tape
    def unmountAndEjectTape():
      try:
        ##unmount tape
        runCmd('umount /mnt/ltfs')
        time.sleep(40)
        print("Unmoutn opperation succesful")
        ##eject the tape
        runCmd("mt -f /dev/IBMtape0 eject")
      except Exception as e:
        print("Unmout opperation failed:" + str(e))

    ##Checks if the tape is mounted and returns a boolean
    def is_mounted(directory):
      proc = subprocess.Popen(['df', '-h'], stdout=subprocess.PIPE, stderr=subprocess.PIPE)
      out, err = proc.communicate()
      pattern = str(out)
      if pattern.find(directory) != -1:
        return True
      else:
        return False

    ##Checks if rsync is running and returns a boolean
    def is_rsyncRunning():
      try:
        runCmd("ps aux|grep rsync|grep -v grep")
        return True
      except Exception as e:
        return False

    ##Create a .tar.gz archive of the given file at specified location
    ##for the "where" parameter you must include the last slash "/"
    def tarAndCopy(file, directory, where):
      fileN =  file.replace('/','.').replace('.','',1)
      fileName = fileN.replace(' ','_').replace(':','_') 
      archiveName = where + directory + "/" + fileName + ".tar.gz"
      out = tarfile.open(archiveName, mode='w:gz')
      try:
        out.add(file, arcname=fileName)
      finally:
        out.close()
        print('Archived: ' + fileName + '.tar.gz')
        archName = 'Archived: ' + fileName + '.tar.gz'
        return archName

      

    ##Prints the total, used, and free space on the tape
    ##Returns false if the tape is not mounted
    ##To be modified for inscript usage
    def spaceLeftOnTape():
      try:
        total, used, free = shutil.disk_usage("/mnt/ltfs")
        if is_mounted('/mnt/ltfs'):
          return free
        else:
          print("Tape is not mounted")
          return False
      except Exception as e:
        print("Error encountered when checking the size of the tape")


    ##Returns the size in bytes of the given folder
    def getFolderSize(folder):
      total_size = os.path.getsize(folder)
      for item in os.listdir(folder):
          itempath = os.path.join(folder, item)
          if os.path.isfile(itempath):
              total_size += os.path.getsize(itempath)
          elif os.path.isdir(itempath):
              total_size += getFolderSize(itempath)
      return total_size

    ##Convert bytes to a more readable format
    def convert_size(size_bytes):
      if size_bytes == 0:
          return "0B"
      size_name = ("B", "KB", "MB", "GB", "TB", "PB", "EB", "ZB", "YB")
      i = int(math.floor(math.log(size_bytes, 1024)))
      p = math.pow(1024, i)
      s = round(size_bytes / p, 2)
      return "%s %s" % (s, size_name[i])

    ##Returns the date of a file as inteer
    def filedate(filename):
      try:
        filedate = backup_end_date(filename)
        return int(filedate[0:8])
      except:
        print('could not extract date from file')

    ##Returns the date of the last full backup as integer in format yyyymmdd
    ##date as int
    def getDateOfLastFull(list, date):
      lastDate = 0
      list = sortList(list,True)
      for file in list:
        lastDate = filedate(file)
        if(lastDate <= date):
          return lastDate
      return lastDate

    ##Returns a list of bakcup files after the last full backup before a given date for a specific
    ##locaition (not to be used on root)
    def getFilesAfterFullBeforeDate(path, date, type):
      listToReturn = []
      fileList = getBackupFilesOfType(path, type)
      fullsList = getBackupFilesOfType(path, 'full')
      lastFullDate = getDateOfLastFull(fullsList, date)
      if(lastFullDate != 0):
        for file in fileList:
          if(filedate(file) >= lastFullDate):
            listToReturn.append(file)
      return listToReturn

    ##Returns a list with all the backup directories in the backupPath
    def getListOfBkpDirs(path):
      try:
        loc = path + '**/allbackups/**/'
        dirs = list(glob(loc, recursive=False))
        if(len(dirs)==0):
          listOfOne = [path]
          return listOfOne
        else:
          return dirs
      except:
        listOfOne = [path]
        return listOfOne
        print('Could not compose directory list')

    ##Returns a list of all the backup files after the last full before a given date for each
    ##subdirectory in the base path
    ##returns -1 in case of error
    def getAllFilesAfterFullBeforeDate(date, type):
      if(not is_rsyncRunning()):
        listToReturn = []
        try:
          for dir in getListOfBkpDirs(backupPath):
            try:
              list = getFilesAfterFullBeforeDate(dir, date, type)
            except:
              print("Directory: " + dir + "failed!")
              continue
            listToReturn.extend(list)
          listToReturn = sortList(listToReturn,False)
          if(not is_rsyncRunning()):
            return listToReturn
          else:
            print("Rsync started while compiling the list")
            return -1
        except:
          print('Failed returning list')
          return -1
      else:
        print("Rsync is running!")

    ##Returns the backup files that have not been stored in the memory file (a.i. which have not been backed up to tape)
    def diffByMemoryfile(list0):
      history = open(memoryFile, 'r')
      blist = history.readlines()
      blistClean = []
      for line in blist:
        blistClean.append(line.replace('\\n',''))
      history.close()
      newDiff = []
      newDiff = list(set(list0) - set(blistClean))
      return sorted(newDiff, key=(backup_end_date(x), vol_suffix(x)))

    ##Removes form the memory file the lies coresponding to files that were deleted from duplicity
    def updateMemoryFile():
      try:
        history = open(memoryFile, 'r')
        bufferList = history.readlines()
        bufferListClean = []
        for line in bufferList:
          bufferListClean.append(line.replace('\\n',''))
        history.close()
        linesToRm = list(set(bufferListClean) - set(getAllBackupFiles(backupPath)))
        newList = list(set(bufferListClean) - set(linesToRm))
        runCmd("echo -n > " + memoryFile)
        cleanf = open(memoryFile, 'a')
        for l in newList:
          cleanf.write(l + '\\n')
        cleanf.close()
        return linesToRm
      except Exception as e:
        print("The cleanup of the memory file failed with exception: " + e)
        return 0

    def sendReport(fromDevice):
      filesOnTape = getAllBackupFiles(fromDevice)
      fmc = open(MAIL_CONTENT, "w")
      today = datetime.datetime.today()
      attachmentName = "report_" +  str(today.year) + "-" + str(today.month) + '-' + str(today.day)
      attachment = open(attachmentName, "w")
      fmc.write("== Files on currnet backup device ==\\n")
      for i in filesOnTape:
        attachment.write(i + '\\n')	
      fmc.write('\\n')
      fmc.write('Backup device is full, please change it!')
      attachment.close()
      fmc.close()
      runCmd('mutt -H {} < {} -a '.format(MAIL_HEADERS, MAIL_CONTENT) + attachmentName)
          `}
        </SyntaxHighlighter>
      </div>
    </>
  )
}

export default Portfolio
